import { useEffect, useState, useCallback } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { IconButton } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

import PlayerRows from "./PlayerRows";
import FantasyDrawer from "./FantasyDrawer";
import * as fantasyServices from "../../services/fantasy.services";
import * as fantasySlice from "../../state/fantasySlice";
import Cancha from "../../../assets/app/campo.png";
import HelpSlider from "../../components/helpSlider/HelpSlider";
import infoLineup from '../../../assets/app/helpLineup'

const { width } = Dimensions.get('window')

export default function Fantasy() {
	const { token } = useSelector((state) => state.auth);
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [squadChange, setSquadChange] = useState(false);
	const [arrayMidfielders, setArrayMidfielders] = useState([]);
	const [arrayDefenders, setArrayDefenders] = useState([]);
	const [arrayFowarders, setArrayFowarders] = useState([]);
	const [arrayGoalkeepers, setArrayGoalkeepers] = useState([]);
	const [helpLineup, setHelpLineup] = useState(false);
	const dispatch = useDispatch();
	const eventId = 1;

	function createArray(players, MAX_PLAYERS) {
		let finalArray = [];
		for (let index = players.length; index < MAX_PLAYERS; index++) {
			finalArray.push({ emptyPlayer: true });
		}
		finalArray = finalArray.concat(players);
		return finalArray;
	}

	const loadSquad = useCallback(async () => {
		setLoading(true);
		try {
			const data = await fantasyServices.fetchSquad(token, eventId);
			setArrayGoalkeepers(
				createArray(
					data.filter((player) => player?.position == "goalkeeper"),
					1
				)
			);

			setArrayMidfielders(
				createArray(
					data.filter((player) => player?.position == "midfielder"),
					3
				)
			);

			setArrayDefenders(
				createArray(
					data.filter((player) => player?.position == "defender"),
					4
				)
			);

			setArrayFowarders(
				createArray(
					data.filter((player) => player?.position == "forward"),
					3
				)
			);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [token]);

	useEffect(() => {
		loadSquad();
	}, [loadSquad]);

	const removePlayer = async (token, eventId, player) => {
		setLoading(true);
		try {
			const data = await fantasyServices.removePlayer(
				token,
				eventId,
				player?.id
			);
			dispatch(fantasySlice.setSelectedPlayer({}));
			loadSquad();
			setSquadChange(!squadChange);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	const insertPlayer = async (token, eventId, selectedPlayer) => {
		setLoading(true);
		try {
			const data = await fantasyServices.insertPlayer(
				token,
				eventId,
				selectedPlayer
			);
			dispatch(fantasySlice.setSelectedPlayer({}));
			loadSquad();
			setSquadChange(!squadChange);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.fondo}>
			<Spinner
				visible={loading}
				size='large'
				color='#E7484D'
				overlayColor='#FFFFFF50'
			/>
			<HelpSlider
				sliderContent={infoLineup}
				isVisible={helpLineup}
				onClose={() => {
					setHelpLineup(false);
				}}
			/>

			<View style={styles.container}>
				{/* Drawer */}
				<View
					style={{
						...styles.drawer,
						overflow: "hidden",
						width: open ? "100%" : 0,
						height: open ? "100%" : 0,
					}}
				>
					<FantasyDrawer squadChange={squadChange} onClose={setOpen} />
				</View>

				<View style={{ width: '90%', height: '100%', backgroundColor: '#E2DDDD', alignSelf: 'center' }}>
					{/* Titulo */}
					<View style={styles.containerTitulo}>
						<View style={styles.containerPuntaje}>
							<Text style={styles.textSt}>FANTASY</Text>
						</View>
						<View style={styles.containerPuntaje}>
							<TouchableOpacity>
								<Text style={[styles.textBoton, styles.textBotonSelected]}>
									Equipo
								</Text>
							</TouchableOpacity>
							<TouchableOpacity>
								<Text style={[styles.textBoton]}>Ranking</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ ...styles.containerTitulo, borderRadius: 10 }}>
						<View style={styles.containerPuntaje}>
							<Text style={{ ...styles.textSt, fontSize: 26, right: '250%' }}>
								Alineación
							</Text>
							<Text style={styles.textScore}>150  PTS</Text>
							<TouchableOpacity
								onPress={() => setHelpLineup(true)}
								style={styles.helpButton}
							>
								<AntDesign name="questioncircle" size={24} color="#E7484D" />
							</TouchableOpacity>
						</View>
					</View>

					{/* Cancha */}
					<View style={styles.containerCancha}>
						<Image source={Cancha} style={styles.canchaImg} />
						<View style={styles.contJugadoresCancha}>
							<PlayerRows
								position={"goalkeeper"}
								players={arrayGoalkeepers}
								insertPlayer={insertPlayer}
								removePlayer={removePlayer}
							/>
							<PlayerRows
								position={"defender"}
								players={arrayDefenders}
								insertPlayer={insertPlayer}
								removePlayer={removePlayer}
							/>
							<PlayerRows
								position={"midfielder"}
								players={arrayMidfielders}
								insertPlayer={insertPlayer}
								removePlayer={removePlayer}
							/>
							<PlayerRows
								position={"forward"}
								players={arrayFowarders}
								insertPlayer={insertPlayer}
								removePlayer={removePlayer}
							/>
						</View>

						{/*  */}
					</View>
					<View style={styles.carruselContainer}>
						<View style={styles.cont}>
							<Text style={styles.texto}>¡Arma tu equipo!</Text>
							<View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
								<Text style={styles.bancas}>Almacen</Text>
								<IconButton
									iconColor='#E7484D'
									icon="dots-horizontal-circle"
									size={35}
									onPress={() => setOpen(true)}
								/>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	fondo: {
		flex: 1,
		backgroundColor: "#EAEAEA",
	},
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	containerTitulo: {
		backgroundColor: "#E3E2E6",
		borderBottomColor: "black",
		borderRadius: 25,
		width: width - (width * 0.1),
		alignSelf: 'center',
		marginTop: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	containerPuntaje: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	textSt: {
		color: "#3D405B",
		fontWeight: "bold",
		fontSize: 32,
	},
	textBoton: {
		color: "#3D405B",
		fontWeight: "700",
		fontSize: 20
	},
	textScore: {
		position: 'absolute',
		color: "#3D405B",
		fontSize: 24,
		fontWeight: '600',
		alignSelf: 'center',
		left: width * 0.53
	},
	helpButton: {
		position: 'absolute',
		alignSelf: 'center',
		left: width * 0.8
	},
	textBotonSelected: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomColor: "#E7484D",
		borderBottomWidth: 4,

	},
	containerCancha: {
		width: "85%",
		height: "70%",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: 'center',
		marginTop: '5%',
		marginBottom: '3%'
	},
	contJugadoresCancha: {
		width: "112%",
		height: "100%",
		position: "absolute",
		flexWrap: "wrap",
		backgroundColor: "#FFFFFF50",
	},
	canchaImg: {
		height: "100%",
		resizeMode: "contain"
	},
	inputStyle: {
		backgroundColor: "#F2F6FE",
		margin: 10,
	},
	drawer: {
		position: "absolute",
		zIndex: 999,
		backgroundColor: "#E2DDDD",
	},
	cont: {
		height: "20%",
		width: width * 0.9,
		justifyContent: "space-around",
		flexDirection: "row",
		alignItems: "center"
	},
	bancas: {
		color: "#3D405B",
		fontWeight: "bold",
		fontSize: 18
	},
	puntajeBoton: {
		width: 90,
		height: 20,
		backgroundColor: "#B02419",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center",
	},
	containerpuntaje: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
	},
	textoBoton: {
		color: "white",
		fontWeight: "bold",
		fontSize: 12,
	},
	texto: {
		color: "#3D405B",
		fontWeight: "bold",
		fontSize: 14,
	},
	imCancha: {
		height: "62%",
		justifyContent: "space-evenly",
		resizeMode: "contain",
	},
	carruselContainer: {
		width: "90%"
	}
});
