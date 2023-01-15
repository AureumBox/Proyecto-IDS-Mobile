import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";

import EmptyPlayerImg from '../../../../assets/app/EmptyPlayer.png'

export default function EmptyPlayer({ position, insertPlayer }) {
	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "Medio Campista",
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
			alert("vacio " + error.message);
		}
	};



	return (
		<TouchableOpacity style={styles.barajita} onPress={handlePress}>
			<Image source={EmptyPlayerImg} style={styles.imgSt} />
			<View style={styles.contenedorTexto}>
				<Text style={styles.idbarajita}>{positionSpa[position]}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	barajita: {
		width: "22%",
		height: "95%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		margin: 3
	},
	imgSt: {
		width: "100%",
		height: "100%",
		resizeMode: 'contain',
		top: 5
	},
	contenedorTexto: {
		width: "100%",
		height: "18%",
		backgroundColor: "#E5464D",
		justifyContent: "center",
		alignItems: "center",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		bottom: 10
	},
	idbarajita: {
		fontWeight: "bold",
		color: "white",
		fontSize: 9
	}
});
