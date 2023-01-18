import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		marginBottom: 10
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
	containerInfo: {
		width: width * 0.65,
		height: height * 0.15,
		right: width * 0.02,
		backgroundColor: "#FFFFFF",
		justifyContent: "flex-end",
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15
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
		top: (height * 0.12) / 16,
		left: (width * 0.25) / 4,
		borderRadius: 15,
		position: "absolute"
	},
	playerPositionText: {
		color: '#FFFFFF',
		fontWeight: "bold",
		fontSize: 13,
		alignSelf: 'center'
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
	buttonInfoContainer: {
		width: width * 0.55,
		height: '25%',
		left: (width * 0.25) / 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	editButton: {
		width: 90,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15
	},
	textButton: {
		fontSize: 10,
		color: "white",
		fontWeight: "bold"
	},
	textCard: {
		color: "black",
		fontWeight: "600"
	}
});