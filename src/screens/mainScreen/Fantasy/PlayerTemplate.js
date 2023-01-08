import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

function isInLineup(isInLineup) {
	if (isInLineup) {
		return (
			<View style={{ flexDirection: "row" }}>
				<Feather
					name="check-circle"
					size={24}
					color="black"
					style={{ marginLeft: width * 0.25 }}
				/>
				<Text style={[styles.playerName, { marginLeft: 10 }]}>Alineado</Text>
			</View>
		);
	}
}

const { width, height } = Dimensions.get("window");

export default function PlayerTemplate({ player = {} }) {
	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "   Medio Campista",
		forward: "Delantero",
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode="contain"
				source={{ uri: player?.img }}
				style={styles.cardImage}
			>
				<Image
					resizeMode="contain"
					source={{ uri: player?.team?.badge }}
					style={styles.badgeImage}
				/>
				<Text style={[styles.playerName, styles.specialText]}>
					{player?.playerName}
				</Text>
			</ImageBackground>
			<View style={styles.containerInfo}>
				<Text style={styles.playerPosition}>
					{positionSpa[player?.position]}
				</Text>
				{isInLineup(player?.isInLineup)}

				<Text style={styles.playerPts}>PTS</Text>
				<Text style={styles.playerScore}>150</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginBottom: 10,
	},
	containerInfo: {
		width: width - width * 0.28,
		backgroundColor: "#F0F0F0",
		right: 10,
		justifyContent: "center",
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
	cardImage: {
		width: width * 0.25,
		height: height * 0.12,
		backgroundColor: "#E5464D",
		borderColor: "blue",
		borderRadius: 15,
		zIndex: 1,
		overflow: "hidden",
	},
	badgeImage: {
		width: width * 0.055,
		height: width * 0.055,
		left: width * 0.25 - width * 0.08,
		top: width * 0.015,
		zIndex: 1,
	},
	playerPosition: {
		width: width - width * 0.4,
		fontWeight: "bold",
		fontSize: 13,
		color: "#FFFFFF",
		backgroundColor: "#E5464D",
		borderRadius: 15,
		textAlign: "center",
		position: "absolute",
		top: (height * 0.12) / 16,
		left: (width * 0.25) / 4,
	},
	playerPts: {
		position: "absolute",
		borderRadius: 50,
		fontWeight: "400",
		left: width * 0.52,
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 14,
	},
	playerScore: {
		position: "absolute",
		borderRadius: 50,
		fontWeight: "600",
		left: width * 0.6,
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 24,
	},
	playerName: {
		fontWeight: "400",
		fontSize: 15,
		color: "#000000"
	},
	specialText: {
		fontSize: 11,
		color: "#FFFFFF",
		transform: [{ rotate: "-90deg" }],
		textAlign: 'center',
		right: width * 0.1,
		top: height * 0.026,
	},
});
