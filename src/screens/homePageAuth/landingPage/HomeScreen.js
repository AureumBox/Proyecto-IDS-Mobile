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
			<StatusBar backgroundColor={'#E7484D'} hidden={false} />
			<Slider />
			<View style={{ flex: 0.25, width: '100%', justifyContent: 'center' }}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => navigation.navigate('SignIn')}
						style={{ justifyContent: 'center' }}
					>
						<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.button1}>
							<Text style={{ ...styles.buttonText, color: 'white' }}>Regístrate</Text>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('LogIn')} >
						<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.button1}>
							<View style={styles.button2}>
								<Text style={{ ...styles.buttonText, color: '#E7484D' }}>Inicia sesión</Text>
							</View>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
	buttonContainer: {
		flex: 1,
		width: '100%'
	},
	button1: {
		backgroundColor: 'blue',
		width: '75%',
		height: '50%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 25
	},
	button2: {
		backgroundColor: '#FFFFFF',
		width: '97%',
		height: '86%',
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 25
	},
	buttonText: {
		fontWeight: '16',
		fontWeight: 'bold',
		textAlign: 'center'
	}
})