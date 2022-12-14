import React, { useState, useEffect, useCallback } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	Linking,
	Alert
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

import { ModalPopup } from '../../components/ModalPopup';
import StickerTemplate from '../../components/StickerTemplate';
import * as eventServices from "../../services/event.services";
import { obtainStickers } from '../../services/sticker.services';
import { watchAd, getAdRedirectUrl } from '../../services/ad.services';
import * as userServices from "../../state/authSlice";
import * as fantasyServices from "../../state/fantasySlice";
import sobreImg from '../../../assets/app/sobre.png';
import albumImg from '../../../assets/app/album.png';
import fantasyImg from '../../../assets/app/fantasy.png';

export default function Home({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const [visibleAnuncio, setVisibleAnuncio] = useState(false);
	const [visibleStickers, setVisibleStickers] = useState(false);
	const [ad, setAd] = useState(null);
	const [joinedEvent, setJoinedEvent] = useState(false);
	const [obtainedStickers, setObtainedStickers] = useState([]);
	const [eventsListPicker, setEventsListPicker] = useState([]);
	const [eventsList, setEventsList] = useState([]);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const onClaimClick = async () => {
		setLoading(true);
		try {
			setAd(await watchAd(token));
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
			setVisibleAnuncio(true);
		}
	};

	const onCloseAd = async () => {
		setLoading(true);
		try {
			setObtainedStickers(await obtainStickers(token));
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
			setVisibleStickers(true);
		}
	};

	const onAdClick = () => {
		const redirectUrl = getAdRedirectUrl(ad?.id);
		Linking.openURL(redirectUrl);
	};

	const selectEvent = async (index) => {
		setLoading(true);
		try {
			const event = eventsList[index];
			if (!event?.imAlreadyPlayingIn) {
				await joinGame(token, event?.id);
			}

			const data = await eventServices.fetchEventInfo(token, event?.id);
			dispatch(userServices.setMoney(data?.money));
			dispatch(userServices.setCurrentEventId(event?.id));
			dispatch(fantasyServices.setPoints(data?.points));
		} catch (error) {
			alert(error);
		} finally {
			setLoading(false);
		}
	};

	const joinGame = async (token, id) => {
		const join = await eventServices.joinGame(token, id);

		/* Bienvenida al evento */
		alert(join.message);
		setJoinedEvent(true);
	};

	const loadEventList = useCallback(async () => {
		setLoading(true);
		try {
			const data = await eventServices.fetchEventsList(token);
			setEventsList(data.items);

			let newArray = data.items.map((item, index) => {
				return { key: index, value: item.eventName };
			});
			setEventsListPicker(newArray);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
			setJoinedEvent(false);
		}
	}, [token, joinedEvent]);
	useEffect(() => {
		loadEventList();
	}, [loadEventList]);

	return (
		<View style={styles.fondo}>
			<Spinner
				visible={loading}
				size='large'
				color='#E7484D'
				overlayColor='#FFFFFF50'
			/>
			{/* Ventana Emergente de drop de Stickers */}
			<ModalPopup visible={visibleStickers}>
				<View style={{ alignItems: "center" }}>
					<View style={styles.modalHeader} />
				</View>
				<View
					style={{
						justifyContent: "center",
						flexDirection: "row",
						flexWrap: "wrap"
					}}
				>
					{obtainedStickers ? (
						obtainedStickers.map((sticker, i) => (
							<View key={i} style={{ margin: 5 }}>
								<StickerTemplate sticker={sticker} onModal={false} />
							</View>
						))
					) : (
						<Text
							style={{
								marginVertical: 30,
								fontSize: 17,
								textAlign: "center",
							}}
						>
							Ha ocurrido un error
						</Text>
					)}
				</View>
				<TouchableOpacity
					onPress={() => setVisibleStickers(false)} >
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.logInButton}>
						<Text style={{ color: "white", fontWeight: "bold" }}>Continuar</Text>
					</LinearGradient>
				</TouchableOpacity>
			</ModalPopup>

			{/* Ventana Emergente de Anuncio */}
			<ModalPopup visible={visibleAnuncio}>
				<View style={{ alignItems: "center" }}>
					<View style={styles.modalHeader} />
				</View>
				<TouchableOpacity onPress={onAdClick}>
					<View style={{ alignItems: "center" }}>
						<Image
							source={{ uri: ad?.img }}
							style={{
								height: 175,
								width: 320,
								resizeMode: "contain",
								marginVertical: 10,
							}}
						/>
					</View>
				</TouchableOpacity>
				<Text
					style={{
						marginVertical: 30,
						fontSize: 20,
						textAlign: "center",
					}}
				>
					??Felicidades, has conseguido un sobre!
				</Text>
				<TouchableOpacity
					onPress={() => {
						setVisibleAnuncio(false);
						onCloseAd();
					}}
				>
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.logInButton}>
						<Text style={{ color: "white", fontWeight: "bold" }}>Ver Sobre</Text>
					</LinearGradient>
				</TouchableOpacity>
			</ModalPopup>

			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.textSt}>Home</Text>
					<Text style={styles.textoEvento}>Competici??n</Text>
					<SelectList
						defaultOption={eventsListPicker[0]}
						setSelected={(val) => setSelected(val)}
						data={eventsListPicker}
						notFoundText={<Text>No hay coincidencias</Text>}
						onSelect={() => selectEvent(selected)}
						onFocus={() => setIsFocus(true)}
					/>
					<View style={styles.containerCuadro}>
						<View style={styles.containerImg}>
							<Image source={sobreImg} style={styles.sobreImg}></Image>
						</View>
						<View style={styles.containerinfo}>
							<Text style={styles.textoFeature}>Sobre diario</Text>
							<Text style={styles.textoSecondary}>Disponible en 00:00:00</Text>
							<TouchableOpacity
								onPress={() => {
									onClaimClick();
									setVisibleAnuncio(false);
									setVisibleStickers(false);
								}}
							>
								<LinearGradient
									colors={["#D13256", "#FE5F42"]}
									style={styles.botonSobre}
								>
									<Text style={styles.textoBoton}>Reclamar</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.containerCuadro}>
						<View style={styles.containerImgAlbum}>
							<Image source={albumImg} style={styles.sobreImg}></Image>
							<View style={styles.barraProgreso}>
								<View style={styles.porcentaje}>
								</View>
							</View>
							<Text
								style={{
									marginRight: '30%',
									marginTop: 2,
									color: "#3D405B",
									fontSize: 12,
									fontWeight: '600'
								}}
							>
								50% Completado
							</Text>
						</View>
						<View style={styles.containerinfo}>
							<Text style={styles.textoFeature}>??lbum</Text>
							<Text style={styles.textoSecondary}>
								Colecciona todos los cromos
							</Text>
							<View style={styles.espacio}>
								<View style={styles.casilla}>
									<TouchableOpacity onPress={() => {
										Alert.alert(
											'',
											'Proximamente...',
										)
									}}>
										<View style={styles.botonSecondary}>
											<Text style={styles.textoBotonSeconday}>
												Intercambiar cromos
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<View style={styles.casilla}>
									<TouchableOpacity onPress={() => navigation.navigate('AlbumNavigator')}>
										<LinearGradient
											colors={["#D13256", "#FE5F42"]}
											style={styles.boton}
										>
											<Text style={styles.textoBoton}>Ver ??lbum</Text>
										</LinearGradient>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View style={styles.containerCuadro}>
						<View style={styles.containerImg}>
							<Image source={fantasyImg} style={styles.sobreImg}></Image>
						</View>
						<View style={styles.containerinfo}>
							<Text style={styles.textoFeature}>Fantasy</Text>
							<Text style={styles.textoSecondary}>Arma tu equipo ideal</Text>
							<View style={styles.espacio}>
								<View style={styles.casilla}>
									<TouchableOpacity>
										<View style={styles.botonSecondary}>
											<Text style={styles.textoBotonSeconday}>
												Ver subastas
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<View style={styles.casilla}>
									<TouchableOpacity
										onPress={() => navigation.navigate('Fantasy')}
									>
										<LinearGradient
											colors={["#D13256", "#FE5F42"]}
											style={styles.boton}
										>
											<Text style={styles.textoBoton}>Ver plantilla</Text>
										</LinearGradient>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EAEAEA",
		paddingLeft: 25,
		paddingRight: 25,
		paddingTop: 10,
	},
	modalHeader: {
		width: "100%",
		paddingVertical: 20,
		// alignItems: "flex-end",
		// justifyContent: "center",
	},
	logInButton: {
		backgroundColor: "#70ABAF",
		padding: 20,
		borderRadius: 120,
		alignItems: "center",
		marginVertical: 30,
		marginHorizontal: 20,
	},
	espacio: {
		height: 40,
		width: "100%",
		flexDirection: "row",
		paddingRight: 15,
		paddingLeft: 70,
	},
	casilla: {
		height: 40,
		width: "50%",
		justifyContent: "center",
		alignItems: "flex-end",
	},
	botonSecondary: {
		backgroundColor: "white",
		borderRadius: 20,
		height: 30,
		marginTop: 7,
		marginRight: 8,
		width: 160,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#3A4159",
		borderWidth: 2,
	},
	containerCuadro: {
		backgroundColor: "#8FCCCA",
		marginTop: 10,
		borderRadius: 12,
		height: 200,
		resizeMode: "contain",
		justifyContent: "center",
		alignItems: "center",
	},
	containerinfo: {
		backgroundColor: "white",
		width: "100%",
		height: 90,
		borderBottomEndRadius: 12,
		borderBottomStartRadius: 12,
		paddingLeft: 10,
		paddingRight: 10,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	boton: {
		height: 30,
		width: 100,
		borderRadius: 20,
		marginTop: 7,
		justifyContent: "center",
		alignItems: "center",
	},
	botonSobre: {
		height: 30,
		width: 100,
		borderRadius: 20,
		marginTop: 7,
		marginLeft: 210,
		justifyContent: "center",
		alignItems: "center",
	},
	containerImg: {
		width: "100%",
		height: 110,
		alignItems: "center",
	},
	containerImgAlbum: {
		width: "100%",
		height: 110,
		alignItems: "flex-end",
		marginLeft: 20,
		flexDirection: "column",
	},
	sobreImg: {
		marginTop: 15,
		height: "140%",
		resizeMode: "contain",
	},
	barraProgreso: {
		height: 20,
		width: 150,
		backgroundColor: "#D9D9D9",
		borderRadius: 20,
		marginTop: -125,
		marginRight: 60,
	},
	porcentaje: {
		height: "100%",
		width: "50%", //Colocar porcentaje de llenado
		backgroundColor: "#3A4159",
		borderRadius: 20,
		alignItems: "center",
	},
	fondo: {
		flex: 1,
		backgroundColor: "#EAEAEA",
	},
	textSt: {
		color: "#3A4159",
		fontWeight: "bold",
		fontSize: 26,
	},
	textoEvento: {
		color: "#3D405B",
		fontWeight: "medium",
		fontSize: 14,
		marginTop: 5,
	},
	textoFeature: {
		color: "#3A4159",
		fontWeight: "bold",
		fontSize: 14,
		marginTop: 5,
	},
	textoSecondary: {
		color: "#808080",
		fontWeight: "light",
		fontSize: 12,
		marginTop: 2,
	},
	textoBoton: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
	},
	textoBotonSeconday: {
		color: "#3D405B",
		fontWeight: "bold",
		fontSize: 14,
	},
});
