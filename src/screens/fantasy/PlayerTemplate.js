import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ImageBackground,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from "@expo/vector-icons";

function isInLineup(isInLineup) {
	if (isInLineup) {
		return (
			<View style={{ flexDirection: "row" }}>
				<Feather
					name="check-circle"
					size={24}
					color="black"
					style={{ marginLeft: width * 0.15 }}
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
			<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.cardImage}>
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
			</LinearGradient>
			<View style={styles.containerInfo}>
				<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.playerPosition}>
					<Text style={styles.playerPositionText}>
						{positionSpa[player?.position]}
					</Text>
				</LinearGradient>
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
		width: width * 0.65,
		right: width * 0.01,
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
	cardImage: {
		width: width * 0.25,
		height: height * 0.15,
		left: width * 0.01,
		borderColor: "blue",
		borderRadius: 15,
		zIndex: 1,
		overflow: "hidden"
	},
	badgeImage: {
		width: width * 0.05,
		height: width * 0.05,
		left: width * 0.25 - width * 0.075,
		top: width * 0.015,
		borderWidth: 0.2,
		borderColor: 'black',
		borderRadius: 25,
		zIndex: 1
	},
	playerPosition: {
		width: width * 0.55,
		borderRadius: 15,
		position: "absolute",
		top: (height * 0.12) / 16,
		left: (width * 0.25) / 4,
	},
	playerPositionText: {
		color: '#FFFFFF',
		fontWeight: "bold",
		fontSize: 13,
		alignSelf: 'center'
	},
	playerPts: {
		fontWeight: "400",
		fontSize: 14,
		position: "absolute",
		borderRadius: 50,
		left: width * 0.44,
		textAlign: "center",
		textAlignVertical: "center"
	},
	playerScore: {
		fontWeight: "600",
		fontSize: 24,
		position: "absolute",
		borderRadius: 50,
		left: width * 0.52,
		textAlign: "center",
		textAlignVertical: "center"
	},
	playerName: {
		fontWeight: "400",
		fontSize: 15,
		color: "#000000"
	},
	specialText: {
		fontSize: 12,
		color: "#FFFFFF",
		transform: [{ rotate: "-90deg" }],
		textAlign: 'center',
		right: width * 0.11,
		top: height * 0.04,
		fontWeight: 'bold'
	},
});
