import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

export default function EmptyPlayer({ idCode = 0, nameCode = 0, position, insertPlayer }) {
	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "   Medio Campista", // 💀💀💀💀💀
		forward: "Delantero",
	};

	const { selectedPlayer } = useSelector((state) => state.fantasy);
	const { token } = useSelector((state) => state.auth);

	// const { eventId } = useSelector((state) => state.auth);
	const eventId = 1;

	const handlePress = () => {
		try {
			if (!selectedPlayer?.id) {
				throw new Error("No tienes un jugador seleccionado");
			}
			if (selectedPlayer?.position != position) {
				throw new Error("Posicion incorrecta para el jugador");
			}

			insertPlayer(token, eventId, selectedPlayer);
		} catch (error) {
			alert(error.message);
		}
	};



	return (
		<TouchableOpacity style={styles.barajita} onPress={handlePress}>
			<Text style={styles.idbarajita}>{positionSpa[position]}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	barajita: {
		width: "22%",
		height: "95%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#E5464D60",
		borderRadius: 10,
		margin: 3,
	},
	idbarajita: {
		fontWeight: "bold",
		color: "white",
		fontSize: 14,
	},
});
