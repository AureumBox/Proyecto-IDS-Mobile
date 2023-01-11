import React from "react";
import {
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Text,
	View,
	SafeAreaView
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Slider from './Slider'

export default function HomeScreen({ navigation }) {

	return (
		<SafeAreaView style={styles.container}>
			<Slider />
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.button1}>
						<Text style={styles.buttonText}>Regístrate</Text>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.button1}>
						<View style={styles.button2}>
							<Text style={styles.buttonText2}>Inicia sesión</Text>
						</View>
					</LinearGradient>
				</TouchableOpacity>
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	button1: {
		backgroundColor: 'blue',
		width: '100%',
		height: '75%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		marginBottom: 5
	},
	button2: {
		backgroundColor: '#FFFFFF',
		width: '98%',
		height: '90%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
	},
	buttonContainer: {
		width: '75%',
		height: 100,
		marginTop: 40,
	},
	buttonText: {
		fontWeight: '16',
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',

	},
	buttonText2: {
		color: '#E7484D',
		fontWeight: '16',
		fontWeight: 'bold',
		textAlign: 'center',
	},
})