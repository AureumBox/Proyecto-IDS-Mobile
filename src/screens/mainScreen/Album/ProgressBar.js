import React from "react";
import {
	StyleSheet,
	Text,
	View
} from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';

export default function ProgressBar() {
	const percent = useSelector((state) => state.album.percentage);


	return (
		<View style={styles.containerPor}>
			<Text style={styles.texto}>{Math.trunc(percent)}%</Text>
			<View style={styles.barraPorcentaje}>
				<LinearGradient colors={["#D13256", "#FE5F42"]} style={[styles.completedBar, { width: `${percent}%`}]}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	containerPor: {
		height: '6%',
		width: '90%',
		marginBottom: '2%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	texto: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 26,
		marginRight: 10
	},
	barraPorcentaje: {
		width: '55%',
		height: '50%',
		backgroundColor: 'white',
		borderRadius: 10
	},
	completedBar: {
		height: '100%',
		borderRadius: 10,
		flexDirection: 'row'
	}
})