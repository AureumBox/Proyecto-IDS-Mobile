import React, { useState, useCallback, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import Container, { Toast } from "toastify-react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Entypo } from "@expo/vector-icons";

import SearchBar from "../../components/SearchBar";
import ButtonAddAuction from "./modales/ButtonAddAuction";
import AuctionsList from "./AuctionsList";
import * as marketServices from "../../services/market.services";
import * as albumServices from "../../services/inventory.services";
import infoMarket from "../../../assets/app/helpMarket";
import HelpSlider from "../../components/helpSlider/HelpSlider";
import { ActivityIndicator } from "react-native-paper";

export default function Market() {
	const [opciones, setOpciones] = useState(1);

	const [loading, setLoading] = useState(1);
	const [reload, setReload] = useState(false);
	const [teams, setTeams] = useState([]);
	const [paginate, setPaginate] = useState({});
	const [page, setPage] = useState(0);
	const [auctions, setAuctions] = useState([]);
	const [helpMarket, setHelpMarket] = useState(false);

	const [playerNameQuery, setPlayerNameQuery] = useState("");
	const [teamQuery, setTeamQuery] = useState("");
	const [positionQuery, setPositionQuery] = useState("");

	const { token } = useSelector((state) => state.auth);
	const { currentEventId } = useSelector((state) => state.auth);

	//Select
	const [isFocus, setIsFocus] = useState(false);

	const dataPosition = [
		{ key: "", value: "Posición" },
		{ key: "goalkeeper", value: "Arquero" },
		{ key: "defender", value: "Defensa" },
		{ key: "midfielder", value: "Medio Campista" },
		{ key: "forward", value: "Delantero" },
	];

	const [isFocusE, setIsFocusE] = useState(false);

	const triggerReload = () => {
		setReload(!reload);
	};

	const loadAuctionsList = useCallback(async () => {
		setLoading(true);
		try {
			let data;
			if (opciones == 1) {
				data = await marketServices.fetchAuctionsList(
					token,
					currentEventId,
					playerNameQuery,
					teamQuery,
					positionQuery,
					page
				);
			} else if (opciones == 2) {
				data = await marketServices.fetchMyAuctionsList(
					token,
					currentEventId,
					teamQuery,
					positionQuery,
					playerNameQuery,
					page
				);
			} else {
				data = await marketServices.fetchMyBidsList(
					token,
					currentEventId,
					/* playerNameQuery,
					teamQuery,
					positionQuery, */
					page
				);
			}

			if (page != 0) {
				setAuctions((auctions) => auctions.concat(data?.items));
			} else {
				setAuctions(data?.items);
			}
			setPaginate(data?.paginate);
		} catch (error) {
			// Toast.error(error.message);
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [opciones, page, teamQuery, positionQuery, playerNameQuery, reload]);
	useEffect(() => {
		loadAuctionsList();
	}, [loadAuctionsList]);

	const loadTeams = useCallback(async () => {
		setLoading(true);
		try {
			const data = await albumServices.fetchTeamsInfo(token, currentEventId);
			let newArray = data?.items?.map((item, index) => {
				return { key: item?.id, value: item?.name };
			});
			newArray.unshift({ key: "", value: "Equipos" });
			setTeams(newArray);
		} catch (error) {
			// Toast.error(error.message);
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [currentEventId]);
	useEffect(() => {
		loadTeams();
	}, [loadTeams]);

	return (
		<View style={styles.fondo}>
			<HelpSlider
				sliderContent={infoMarket}
				isVisible={helpMarket}
				onClose={() => {
					setHelpMarket(false);
				}}
			/>
			<Container position="top" />
			<View style={styles.container}>
				<View style={styles.containerHeader}>
					<Text style={styles.title}>Mercado</Text>
					<View style={{ flex: 1, justifyContent: 'flex-end' }}>
						<View style={styles.containerButtons}>
							<TouchableOpacity
								style={opciones === 1 ? styles.buttonSelected : styles.button}
								onPress={() => {
									setAuctions([]);
									setPage(0);
									setOpciones(1);
								}}
							>
								<Text style={styles.textButton}>Ofertas globales</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={opciones === 2 ? styles.buttonSelected : styles.button}
								onPress={() => {
									setAuctions([]);
									setPage(0);
									setOpciones(2);
								}}
							>
								<Text style={styles.textButton}>Mis subastas</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={opciones === 3 ? styles.buttonSelected : styles.button}
								onPress={() => {
									setAuctions([]);
									setPage(0);
									setOpciones(3);
								}}
							>
								<Text style={styles.textButton}>Mis ofertas</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={{ flex: 0.85, width: '100%' }}>
					<View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
						<TouchableOpacity
							onPress={() => setHelpMarket(true)}
						>
							<LinearGradient
								colors={["#D13256", "#FE5F42"]}
								style={{ borderRadius: 15, padding: 3 }}
							>
								<Entypo name="help" size={22} color="white" />
							</LinearGradient>
						</TouchableOpacity>
					</View>

					<SearchBar
						searchPhrase={playerNameQuery}
						setSearchPhrase={setPlayerNameQuery}
					/>

					<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
						<View style={{ width: '40%' }}>
							<SelectList
								setSelected={(val) => setTeamQuery(val)}
								data={teams}
								save="key"
								placeholder={!isFocusE ? "Equipos" : "..."}
								onFocus={() => setIsFocusE(true)}
								boxStyles={{ borderColor: '#E7484D', marginVertical: 10 }}
								inputStyles={{ color: "#3D405B", fontWeight: 'bold' }}
							/>
						</View>
						<View style={{ width: '40%' }}>
							<SelectList
								setSelected={(val) => setPositionQuery(val)}
								data={dataPosition}
								save="key"
								placeholder={!isFocus ? "Posición" : "..."}
								onFocus={() => setIsFocus(true)}
								boxStyles={{ borderColor: '#E7484D', marginVertical: 10 }}
								inputStyles={{ color: "#3D405B", fontWeight: 'bold' }}
							/>
						</View>
					</View>
					{/* Lista */}
					<View style={styles.containerList} >
						{opciones == 2 && (
							<ButtonAddAuction triggerReload={triggerReload} />
						)}
						{loading && <ActivityIndicator size="small" color="#E7484D" />}
						{!loading && (
							<AuctionsList
								auctions={auctions}
								opciones={opciones}
								paginate={paginate}
								setPage={setPage}
								nextPage={loadAuctionsList}
								triggerReload={triggerReload}
							/>
						)}
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
		justifyContent: 'center'
	},
	container: {
		flex: 0.97,
		width: '90%',
		backgroundColor: '#E3E2E6',
		alignSelf: 'center',
		justifyContent: 'space-between',
		borderRadius: 10
	},
	containerHeader: {
		flex: 0.15,
		width: "100%",
		backgroundColor: "#D7D3DA",
		borderRadius: 10,
		paddingHorizontal: 10
	},
	title: {
		fontWeight: "bold",
		fontSize: 34,
		color: "#3D405B",
		marginLeft: '2%'
	},
	containerButtons: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around"
	},
	buttonSelected: {
		textAlign: "center",
		padding: 10,
		borderBottomWidth: 2.5,
		borderBottomColor: "#E7484D",
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		padding: 8,
		justifyContent: "center"
	},
	textButton: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#3D405B",
		textAlign: "center"
	},
	containerList: {
		flex: 1,
		alignSelf: "center",
		width: "100%"
	}
});
