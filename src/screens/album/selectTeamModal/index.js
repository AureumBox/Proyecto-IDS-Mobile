import React from "react";
import {
	Text,
	View,
	TouchableOpacity,
	FlatList,
	SafeAreaView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

import { setCurrentTeam, setIndex, setCurrentPage } from "../../../state/albumSlice.js";
import { ModalPopup } from "../../../components/ModalPopup";
import OneTeam from "./OneTeam";
import styles from '../styles';

export default function SelectTeamModal({ isVisible, onClose }) {
	const dispatch = useDispatch();
	const teamList = useSelector((state) => state.album.teamList);

	const changeCurrentTeamByIndex = (index) => {
		dispatch(setIndex(index))
		dispatch(setCurrentPage(1))
		dispatch(
			setCurrentTeam({
				index,
				id: teamList[index].id,
				name: teamList[index].name,
				obtainedCount: teamList[index].stickers.length,
			})
		);
		onClose();
	}

	return (
		<ModalPopup visible={isVisible}>
			<View style={{ paddingHorizontal: 20, height: '80%' }}>
				<TouchableOpacity onPress={onClose} >
					<Ionicons
						name="arrow-back-circle"
						size={55}
						color="#E7484D"
						style={{ position: 'absolute', top: 15}}
					/>
				</TouchableOpacity>
				<View style={{ alignItems: "center" }}>
					<View style={styles.modalHeader}>
						<Text style={styles.listHeadLine} >Equipos</Text>
					</View>
				</View>
				<View>
					{/* Lista de equipos */}
					<FlatList
						ItemSeparatorComponent={() => <View style={styles.separator} />}
						data={teamList}
						renderItem={({ item, index }) => {
							return (<OneTeam item={item} index={index} onPress={changeCurrentTeamByIndex} />);
						}}
					/>
				</View>
			</View>
		</ModalPopup>
	);
}