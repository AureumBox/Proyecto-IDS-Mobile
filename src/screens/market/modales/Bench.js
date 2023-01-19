import React, { useCallback, useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import { SelectList } from "react-native-dropdown-select-list";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";

import SearchBar from "../../../components/SearchBar";
import PlayersList from "../PlayersList";
import * as fantasyServices from "../../../services/fantasy.services";
import * as albumServices from "../../../services/inventory.services";
import * as marketServices from "../../../services/market.services";

export default function Bench({ onClick, setVisible, triggerReload }) {
	const [searchPhrase, setSearchPhrase] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const [isFocusE, setIsFocusE] = useState(false);
	const [bench, setBench] = useState([]);
	const [teams, setTeams] = useState([]);

	const [playerNameQuery, setPlayerNameQuery] = useState("");
	const [teamQuery, setTeamQuery] = useState("");
	const [positionQuery, setPositionQuery] = useState("");
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const [paginate, setPaginate] = useState({});

	const { token } = useSelector((state) => state.auth);
	const { currentEventId } = useSelector((state) => state.auth);

	const dataPosicion = [
		{ key: "", value: "Posición" },
		{ key: "goalkeeper", value: "Arquero" },
		{ key: "defender", value: "Defensa" },
		{ key: "midfielder", value: "Medio Campista" },
		{ key: "forward", value: "Delantero" },
	];

	const loadTeams = useCallback(async () => {
		setLoading(true);
		try {
			const data = await albumServices.fetchTeamsInfo(token, currentEventId);
			let newArray = data?.items?.map((item, index) => {
				return { key: item?.name, value: item?.name };
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

	const loadBench = useCallback(async () => {
		setLoading(true);
		try {
			const data = await fantasyServices.fetchBench(
				token,
				currentEventId,
				playerNameQuery,
				teamQuery,
				positionQuery,
				page
			);

			if (page != 0) {
				setBench((bench) => bench.concat(data?.items));
			} else {
				setBench(data?.items);
			}
			setPaginate(data?.paginate);
		} catch (error) {
			// Toast.error(error.message);
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [currentEventId, playerNameQuery, teamQuery, positionQuery, page]);
	useEffect(() => {
		loadBench();
	}, [loadBench]);

	const postAuction = async (
		initialValue,
		directPurchase,
		playerId,
		setLoading,
		setVisible
	) => {
		setLoading(true);
		try {
			const data = await marketServices.postAuction(
				token,
				currentEventId,
				initialValue,
				directPurchase,
				playerId
			);
			alert(data.message);
			triggerReload();
			loadBench();
		} catch (error) {
			// Toast.error(error.message);
			alert(error.message);
		} finally {
			setLoading(false);
			setVisible(false);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					setVisible(false);
				}}
			>
				<AntDesign
					name="closecircleo"
					size={20}
					color="black"
					style={{ marginLeft: "92%" }}
				/>
			</TouchableOpacity>
			<Text style={styles.title}>Banca</Text>
			<View style={{ alignItems: "center" }}>
				<View style={{ alignSelf: 'flex-end' }} >
					<TouchableOpacity>
						<LinearGradient
							colors={["#D13256", "#FE5F42"]}
							style={{ borderRadius: 15, padding: 3, marginTop: 1 }}
						>
							<Entypo name="help" size={22} color="white" />
						</LinearGradient>
					</TouchableOpacity>
				</View>

				<SearchBar
					searchPhrase={playerNameQuery}
					setSearchPhrase={setPlayerNameQuery}
				/>

				<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
					<View style={{ width: '40%' }}>
						<SelectList
							setSelected={(val) => {
								setTeamQuery(val);
								setPage(0);
							}}
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
							setSelected={(val) => {
								setPositionQuery(val);
								setPage(0);
							}}
							data={dataPosicion}
							save="key"
							placeholder={!isFocus ? "Posición" : "..."}
							onFocus={() => setIsFocus(true)}
							boxStyles={{ borderColor: '#E7484D', marginVertical: 10 }}
							inputStyles={{ color: "#3D405B", fontWeight: 'bold' }}
						/>
					</View>
				</View>
			</View>

			{loading && <ActivityIndicator size="small" color="#E7484D" />}
			{!loading && (
				<PlayersList
					players={bench}
					paginate={paginate}
					setPage={setPage}
					postAuction={postAuction}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: '80%',
		alignSelf: 'center',
		backgroundColor: '#EAEAEA',
		borderColor: 'blue',
		borderWidth: 2
	},
	title: {
		fontWeight: "bold",
		fontSize: 28,
		color: "#3D405B",
	},
});
