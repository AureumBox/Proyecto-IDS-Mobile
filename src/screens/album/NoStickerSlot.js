import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions
} from "react-native";

const { width } = Dimensions.get('window');

export default function NoStickerSlot({ idCode = 0, nameCode = 0 }) {
	return (
		<View style={styles.barajita}>
			<Text style={styles.idbarajita}>{idCode}</Text>
			<Text style={styles.idbarajita}>{nameCode}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	barajita: {
		backgroundColor: "#3A4159",
		width: width / 3.5,
		height: (width / 3.5) * 1.3,
		justifyContent: "center",
		alignItems: "center",
	},
	idbarajita: {
		fontWeight: "bold",
		color: "white",
		fontSize: 14,
	},
});
