import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";

export default function EmptyPlayer({ position, insertPlayer }) {
	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "   Medio Campista", 
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
			alert("vacio "+error.message);
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
