import React from "react";
import {
	TouchableOpacity,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	Dimensions
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import logoImg from '../../../assets/app/logoVertical.png'

const { width, height } = Dimensions.get('window');

export default function PWRecovery({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.imageContainer}>
					<Image style={styles.logoSt} source={logoImg} />
				</View>
				<View style={styles.contentContainer}>
					<Text style={styles.body}>¿Olvidaste tu contraseña?</Text>
					<Text style={styles.text}>
						No te preocupes, puede suceder. Por favor ingresa tu Correo Electrónico. Estaremos enviandote un correo para reiniciar tu contraseña
					</Text>
					<View style={styles.inputContainer}>
						<Ionicons
							name="mail-outline"
							size={24}
							color="#808080"
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
		backgroundColor: '#FFFFFF'
	},
	imageContainer: {
		height: height * 0.3,
		width: width,
		backgroundColor: '#EAEAEA',
		justifyContent: 'center',
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25
	},
	contentContainer: {
		flex: 0.7,
		width: '100%',
		paddingHorizontal: 30
	},
	logoSt: {
		height: height * 0.3,
		width: '100%',
		alignSelf: 'center',
		resizeMode: 'contain'
	},
	text: {
		paddingBottom: 50,
		fontSize: 16,
		lineHeight: 23,
		fontWeight: '400',
		textAlign: 'center',
		color: '#353147',
	},
	body: {
		padding: 20,
		fontSize: 30,
		lineHeight: 35,
		marginBottom: 20,
		fontWeight: '700',
		textAlign: 'center',
		color: '#2A555E',
	},
	inputContainer: {
		width: '100%',
		height: 60,
		backgroundColor: 'white',
		borderRadius: 25,
		marginBottom: 20,
		justifyContent: 'center',
		borderColor: '#808080',
		borderBottomWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
	},
	inputIcon: {
		position: 'absolute',
		alignItems: 'center',
		left: 25
	},
	inputText: {
		paddingLeft: 40,
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