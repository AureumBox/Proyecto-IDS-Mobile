import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function FantasyPlayer({ player = {}, removePlayer }) {
	const { token } = useSelector((state) => state.auth);
	const eventId = 1;

	const handlePress = () => {
		try {
			removePlayer(token, eventId, player);
		} catch (error) {
			alert("jug " + error.message);
		}
	};

	return (
		<TouchableOpacity style={styles.barajita} onPress={handlePress}>
			<Image source={{ uri: player?.img }} style={styles.imgSt} />
			<View style={styles.contenedorTexto}>
				<Text style={styles.idbarajita}>{player?.playerName}</Text>
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
		margin: 3,
		overflow: "hidden",
	},
	imgSt: {
		width: "100%",
		height: "100%",
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
