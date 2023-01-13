import React, { useState } from "react";
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

export default function PWReset({ navigation }) {
	const [showPass, setShowPass] = useState(true);
	const [showConf, setShowConf] = useState(true);
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.imageContainer}>
					<Image style={styles.logoSt} source={logoImg} />
				</View>
				<View style={styles.contentContainer}>
					<Text style={styles.body}>Reiniciar Contraseña</Text>
					<Text style={styles.text}>
						Tip: Las contraseñas fuertes incluyen una combinación de números, letras y signos de puntuación
					</Text>
					<View style={styles.inputContainer}>
						<Ionicons
							name="lock-closed-outline"
							size={24}
							color="#808080"
							style={styles.inputIcon}
						/>
						<TextInput
							style={styles.inputText}
							placeholder='Nueva Contraseña'
							autoCorrect={false}
							secureTextEntry={showPass}
						/>
						<TouchableOpacity
							onPress={() => { setShowPass(!showPass) }}
							style={styles.buttonEye}
						>
							<Ionicons
								name={showPass === false ? 'eye-outline' : 'eye-off-outline'}
								size={26}
								color='#808080'
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.inputContainer}>
						<Ionicons
							name="lock-closed-outline"
							size={24}
							color="#808080"
							style={styles.inputIcon}
						/>
						<TextInput
							style={styles.inputText}
							placeholder='Verificar Contraseña'
							autoCorrect={false}
							secureTextEntry={showConf}
						/>
						<TouchableOpacity
							onPress={() => { setShowConf(!showConf) }}
							style={styles.buttonEye}
						>
							<Ionicons
								name={showConf === false ? 'eye-outline' : 'eye-off-outline'}
								size={26}
								color='#808080'
							/>
						</TouchableOpacity>
					</View>
					{/* Boton Iniciar Sesión */}
					<TouchableOpacity
						onPress={() => navigation.navigate('HomeScreen')}
					>
						<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.logInButton}>
							<Text style={{ color: 'white', fontWeight: 'bold' }}>Reiniciar Contraseña</Text>
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
		backgroundColor: '#FFFFFF'
	},
	imageContainer: {
		width: width,
		height: height * 0.3,
		backgroundColor: '#EAEAEA',
		justifyContent: 'center',
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25
	},
	contentContainer: {
		paddingHorizontal: 30,
		marginTop: 30
	},
	logoSt: {
		height: '100%',
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
		color: '#353147'
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
	buttonEye: {
		position: 'absolute',
		right: 25
	},
	logInButton: {
		backgroundColor: '#70ABAF',
		padding: 20,
		borderRadius: 25,
		alignItems: 'center',
		marginVertical: 60
	}
})