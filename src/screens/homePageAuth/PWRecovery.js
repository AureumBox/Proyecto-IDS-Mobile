import React from "react";
import {
	TouchableOpacity,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PWRecovery({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.contentContainer}>
					<Text style={styles.body}>¿Olvidaste tu contraseña?</Text>
					<Text style={styles.text}>
						No te preocupes, puede suceder. Por favor ingresa tu Correo Electrónico. Estaremos enviandote un correo para reiniciar tu contraseña
					</Text>
					<View style={styles.inputContainer}>
						<Ionicons
							name="mail-outline"
							size={24}
							color="#E7484D"
							style={styles.inputIcon}
						/>
						<TextInput
							style={styles.inputText}
							placeholder='Correo Electrónico'
							autoCorrect={false}
						/>
					</View>
					{/* Boton Reiniciar Contraseña */}
					<TouchableOpacity
						onPress={() => navigation.navigate('PWReset')}
					>
						<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.logInButton}>
							<Text style={{ color: 'white', fontWeight: 'bold' }}>Enviar correo para reiniciar contraseña</Text>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F2F6FF',
	},
	contentContainer: {
		paddingHorizontal: 30,
		marginTop: 50,
	},
	body: {
		padding: 20,
		fontSize: 30,
		lineHeight: 35,
		marginBottom: 20,
		fontWeight: '400',
		textAlign: 'center',
		color: '#3A4159',
	},
	text: {
		paddingBottom: 50,
		fontSize: 16,
		lineHeight: 23,
		fontWeight: '400',
		textAlign: 'center',
		color: '#353147',
	},
	inputContainer: {
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 25,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20
	},
	inputIcon: {
		position: 'absolute',
		alignItems: 'center',
		left: 25
	},
	inputText: {
		paddingLeft: 20,
		marginHorizontal: 20
	},
	logInButton: {
		backgroundColor: '#70ABAF',
		padding: 20,
		borderRadius: 25,
		alignItems: 'center',
		marginVertical: 30,
	}
})