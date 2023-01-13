import React, { useState, useCallback, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
	FlatList
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import Spinner from "react-native-loading-spinner-overlay";
import { AntDesign } from '@expo/vector-icons';

import PlayerTemplate from "./PlayerTemplate";
import { fetchBench } from "../../../services/fantasy.services";
import { fetchTeamsInfo } from "../../../services/inventory.services";
import * as fantasySlice from "../../../state/fantasySlice";
import HelpSlider from "../../../components/helpSlider/HelpSlider";
import infoBench from '../../../../assets/app/helpBench'

const { width, height } = Dimensions.get("window");


export default function FantasyDrawer({ squadChange, onClose }) {
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(0);
	const [paginate, setPaginate] = useState({});
	const [bench, setBench] = useState([]);
	const [selected, setSelected] = useState("");
	const [teamsListPicker, setTeamsListPicker] = useState([]);
	const [helpBench, setHelpBench] = useState(false);

	const filterData = [
		{ key: '0', value: 'Posición' },
		{ key: '1', value: 'Arquero' },
		{ key: '2', value: 'Defensa' },
		{ key: '3', value: 'Medio Campista' },
		{ key: '4', value: 'Delantero' }
	]

	const filterPos = (value) => {
		if (value == 0) return setPosition('')
		if (value == 1) return setPosition('goalkeeper')
		if (value == 2) return setPosition('defender')
		if (value == 3) return setPosition('midfielder')
		if (value == 4) return setPosition('forward')
	}

	const [playerName, setPlayerName] = useState("");
	const [team, setTeam] = useState("");
	const [position, setPosition] = useState("");

	const dispatch = useDispatch();
	const eventId = 1;

	const { token } = useSelector((state) => state.auth);
	const { selectedPlayer } = useSelector((state) => state.fantasy);

	const selectPlayer = (item) => {
		if (item == selectedPlayer) {
			dispatch(fantasySlice.setSelectedPlayer({}));
			return;
		}
		dispatch(fantasySlice.setSelectedPlayer(item));
	};

	const loadNextPageBench = useCallback(async () => {
		setLoading(true);
		try {
			const data = await fetchBench(
				token,
				eventId,
				playerName,
				team,
				position,
				page
			);
			setBench((bench) => bench.concat(data.items));
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [page]);
	useEffect(() => {
		loadNextPageBench();
	}, [loadNextPageBench]);

	const loadBench = useCallback(async () => {
		setLoading(true);
		try {
			const data = await fetchBench(token, eventId, playerName, team, position);
			setBench(data.items);
			setPaginate(data.paginate);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [eventId, playerName, team, position, squadChange]);

	useEffect(() => {
		loadBench();
	}, [loadBench]);

	const loadTeams = useCallback(async () => {
		setLoading(true);
		try {
			const data = await fetchTeamsInfo(token, eventId);
			let newArray = data.items.map((item) => {
				return { value: item.name };
			});
			newArray.unshift('Equipo')
			setTeamsListPicker(newArray)
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [eventId]);

	useEffect(() => {
		loadTeams();
	}, [loadTeams]);

	return (
		<View style={styles.fondo}>
			<HelpSlider
				sliderContent={infoBench}
				isVisible={helpBench}
				onClose={() => {
					setHelpBench(false);
				}}
				/>
				
				{/* Filtros */}
			<View style={styles.filterContainer}>
				<View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
					<TouchableOpacity onPress={() => setHelpBench(true)} >
						<AntDesign name="questioncircle" size={30} color="#E7484D" />
					</TouchableOpacity>
				</View>
				<TextInput
					placeholder="Buscar..."
					value={playerName}
					onChangeText={(playerName) => setPlayerName(playerName)}
					left={<TextInput.Icon icon="magnify" />}
					style={styles.inputStyle}
					theme={{ roundness: 50 }}
					underlineStyle={{ display: "none" }}
				/>
				<View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
					<View style={{ width: '40%' }}>
						<SelectList
							defaultOption={filterData[0]}
							setSelected={(val) => setSelected(val)}
							data={filterData}
							notFoundText={<Text>No hay coincidencias</Text>}
							onSelect={() => filterPos(selected)}
							onFocus={() => setIsFocus(true)}
							boxStyles={{ borderColor: '#E7484D', marginBottom: 10 }}
							inputStyles={{ color: "#3D405B", fontWeight: 'bold' }}
						/>
					</View>
					<View style={{ width: '40%' }}>
						<SelectList
							placeholder='Equipo'
							defaultOption={teamsListPicker[0]}
							setSelected={(val) => setSelected(val)}
							data={teamsListPicker}
							notFoundText={<Text>No hay coincidencias</Text>}
							onSelect={() => {
								if (selected === 'Equipo') setTeam('')
								else setTeam(selected)
							}}
							onFocus={() => setIsFocus(true)}
							boxStyles={{ borderColor: '#E7484D', marginBottom: 10 }}
							inputStyles={{ color: "#3D405B", fontWeight: 'bold' }}
						/>
					</View>
				</View>
			</View>

			{/* Jugadores fantasy */}
			<View style={{ flex: 1 }}>
				<Spinner
					visible={loading}
					size='large'
					color='#E7484D'
					overlayColor='#FFFFFF50'
				/>

				<FlatList
					data={bench}
					keyExtractor={(_, index) => index.toString()}
					ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
					onEndReached={() => {
						if (page < paginate?.pages - 1) setPage(page + 1);
					}}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => {
									selectPlayer(item);
								}}
							>
								<View styles={{ backgroundColor: "red" }}>
									<PlayerTemplate player={item} key={item.id} />
									{item.id === selectedPlayer.id && (
										<View style={styles.selectedItem} />
									)}
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	fondo: {
		flex: 0.85,
		backgroundColor: "#EAEAEA"
	},
	filterContainer: {
		backgroundColor: "#E3E2E6",
		width: '100%'
	},
	inputStyle: {
		backgroundColor: "#F2F6FE",
		borderRadius: 50,
		width: width * 0.7,
		alignSelf: 'center',
		marginBottom: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	selectedItem: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "#FAF7F780",
		borderColor: "#C10001",
		width: width * 0.9,
		height: height * 0.15,
		borderWidth: 4,
		borderRadius: 15,
		zIndex: 5
	},
});
