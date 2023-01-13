import React, { useState } from "react";
import {
	TouchableOpacity,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	Image,
	View,
	Dimensions
} from "react-native";
import { useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import Spinner from 'react-native-loading-spinner-overlay';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { login } from "../../services/auth.services";
import { logIn as logInRedux } from '../../state/authSlice.js';
import logoImg from '../../../assets/app/logoVertical.png'

const { width, height } = Dimensions.get('window');

export default function LogIn({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(true);
	const { control, handleSubmit, formState: { errors } } = useForm();
	const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	const dispatch = useDispatch();

	const sendLoginData = async (data) => {
		setLoading(true);
		try {
			const result = await login(data);
			setLoading(false);
			if (result.data.item.token) {
				dispatch(logInRedux(result.data.item.token));
				navigation.navigate('BottomNavBar');
			}
		} catch (error) {
			if (error?.response?.data) {
				alert(error?.response?.data.message);
			} else {
				alert("Error del servidor al autenticarse");
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.imageContainer}>
					<Image style={styles.logoSt} source={logoImg} />
				</View>
				<View style={styles.contentContainer}>
					<Spinner
						visible={loading}
						size='large'
						color='#E7484D'
						overlayColor='#FFFFFF50'
					/>
					<Text style={styles.body}>Ingresa en tu Cuenta</Text>

					{/* Email Input */}
					<View style={styles.inputContainer}>
						<Ionicons
							name="mail-outline"
							size={24}
							color="#808080"
							style={styles.inputIcon}
						/>
						<Controller
							control={control}
							name="email"
							rules={{
								required: "Ingrese su correo electrónico",
								pattern: { value: EMAIL_REGEX, message: "Ingrese un correo válido" }
							}}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<>
									{error && (
										<Text style={styles.textError}>{error.message}</Text>
									)}
									<TextInput
										value={value}
										style={error ? styles.inputError : styles.inputText}
										placeholder='Correo Electrónico'
										autoCorrect={false}
										onChangeText={onChange}
									/>

								</>
							)}
						/>
					</View>

					{/* Password Input */}
					<View style={styles.inputContainer}>
						<Ionicons
							name="lock-closed-outline"
							size={24}
							color="#808080"
							style={styles.inputIcon}
						/>
						<Controller
							control={control}
							name="password"
							rules={{ required: "Ingrese su contraseña" }}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<>
									{error && (
										<Text style={styles.textError}>{error.message}</Text>
									)}
									<TextInput
										value={value}
										style={error ? styles.inputError : styles.inputText}
										placeholder='Contraseña'
										autoCorrect={false}
										onChangeText={onChange}
										secureTextEntry={show}
									/>
								</>
							)}
						/>
						<TouchableOpacity
							onPress={() => { setShow(!show) }}
							style={styles.buttonEye}
						>
							<Ionicons
								name={show === false ? 'eye-outline' : 'eye-off-outline'}
								size={26}
								color='#808080'
							/>
						</TouchableOpacity>
					</View>
					{/* Boton Olvido su Contraseña */}
					<TouchableOpacity
						onPress={() => navigation.navigate('PWRecovery')}
					>
						<Text
							style={[
								{ color: '#3A4159', fontWeight: 'bold', lineHeight: 30, textAlign: 'right' },
							]}>
							Recuperar Contraseña
						</Text>
					</TouchableOpacity>
					{/* Boton Iniciar Sesión */}
					<TouchableOpacity onPress={handleSubmit(sendLoginData)}>
						<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.logInButton}>
							<Text style={{ color: 'white', fontWeight: 'bold' }}>Iniciar Sesión</Text>
						</LinearGradient>
					</TouchableOpacity>
					{/* Boton Cambiar a pantalla de registro */}
					<TouchableOpacity
						onPress={() => navigation.navigate('SignIn')}
					>
						<Text style={styles.forgotPW}>¿No tienes una cuenta?, ¡Registrate Ahora!</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
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
	inputError: {
		padding: 20,
		paddingLeft: 60,
		borderWidth: 2,
		borderColor: '#E7484D',
		borderRadius: 25,
	},
	textError: {
		color: '#E7484D',
		fontWeight: '500',
		fontSize: 14,
		position: 'absolute',
		bottom: 60,
		alignSelf: "center"
	},
	logInButton: {
		padding: 20,
		borderRadius: 25,
		alignItems: 'center',
		marginVertical: 30,
	},
	forgotPW: {
		fontSize: 20,
		color: '#3A4159',
		fontWeight: 'bold',
		textAlign: 'center'
	}
})