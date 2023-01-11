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
import { IconButton } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";

import PlayerRows from "./PlayerRows";
import FantasyDrawer from "./FantasyDrawer";
import * as fantasyServices from "../../services/fantasy.services";
import * as fantasySlice from "../../state/fantasySlice";
import Cancha from "../../../assets/app/campo.png";

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
					<IconButton
						icon="close"
						iconColor="#3D405B"
						size={30}
						onPress={() => setOpen(false)}
					/>
					<FantasyDrawer squadChange={squadChange} />
				</View>
				<View style={{ width: '90%', height: '100%', backgroundColor: '#E2DDDD', alignSelf: 'center' }}>
					<Spinner visible={loading} textContent={"Cargando..."} />

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

					<View style={{...styles.containerTitulo, borderRadius: 10}}>
						<View style={styles.containerPuntaje}>
								<Text style={{...styles.textSt, fontSize: 26, right: '250%'}}>
									Alineación
								</Text>
								<Text style={styles.textScore}>150  PTS</Text>
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
							<Text style={styles.bancas}>Almacen</Text>
							<IconButton
								style={styles.opciones}
								icon="dots-horizontal"
								size={20}
								onPress={() => setOpen(true)}
							/>
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
		left: '65%'
	},
	textBotonSelected: {
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomColor: "#63130B",
		borderBottomWidth: 4,

	},
	containerCancha: {
		width: "90%",
		height: "75%",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#E3E2E6",
		marginTop: 10
	},
	contJugadoresCancha: {
		width: "107%",
		height: "95%",
		position: "absolute",
		flexWrap: "wrap",
		backgroundColor: "#FFFFFF50",
	},
	canchaImg: {
		height: "95%",
		resizeMode: "contain",
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
	bancaImg: {
		width: 100,
		height: 130,
		marginLeft: 2.5,
		marginRight: 2.5,
	},
	cont: {
		height: "20%",
		width: "100%",
		justifyContent: "space-evenly",
		flexDirection: "row",
		alignItems: "center",
	},
	opciones: {
		height: 30,
		width: 30,
		borderRadius: 15,
		backgroundColor: "#E7484D",
		position: "absolute",
		right: 0,
	},
	bancas: {
		color: "#3D405B",
		fontWeight: "bold",
		fontSize: 18,
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
