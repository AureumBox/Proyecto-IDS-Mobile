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
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from "react-hook-form";
import Spinner from 'react-native-loading-spinner-overlay';
import { LinearGradient } from 'expo-linear-gradient';

import { logIn } from '../../state/authSlice.js';
import { signup } from "../../services/auth.services";
import logoImg from '../../../assets/splash.png'

const { width, height } = Dimensions.get('window');

export default function SignIn({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [showPass, setShowPass] = useState(true);
	const [showConf, setShowConf] = useState(true);
	const { control, handleSubmit, formState: { errors }, watch } = useForm();
	const pwd = watch("password");
	const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	const dispatch = useDispatch();

	const sendRegisterData = async (data) => {
		setLoading(true);
		try {
			const result = await signup(data);
			setLoading(false);
			if (result.data.token) {
				dispatch(logIn(result.data.token));
				navigation.navigate('HomeScreen');
			}
		} catch (error) {
			if (error?.response?.data) {
				alert(error?.response?.data.message);
			} else {
				alert("Error del servidor al registrarse");
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
						textContent={'Cargando...'}
					/>
					<Text />
					<Text style={styles.body}>Crea una Cuenta</Text>
					<View style={styles.inputContainer}>
						<Ionicons
							name="person-outline"
							size={24}
							color="#E7484D"
							style={styles.inputIcon}
						/>
						<Controller
							control={control}
							name="name"
							rules={{ required: "Ingrese su nombre de usuario" }}
							render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
								<>
									{error && (
										<Text style={styles.textError}>{error.message}</Text>
									)}
									<TextInput
										value={value}
										style={error ? styles.inputError : styles.inputText}
										placeholder='Nombre de usuario'
										autoCorrect={false}
										onChangeText={onChange}
									/>

								</>
							)}
						/>
					</View>
					<View style={styles.inputContainer}>
						<Ionicons
							name="mail-outline"
							size={24}
							color="#E7484D"
							style={styles.inputIcon}
						/>
						<Controller
							control={control}
							name="email"
							rules={{
								required: "Ingrese su correo electrónico",
								pattern: { value: EMAIL_REGEX, message: "Ingrese un correo válido" }
							}}
							render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
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
					<View style={styles.inputContainer}>
						<Ionicons
							name="lock-closed-outline"
							size={24}
							color="#E7484D"
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
										secureTextEntry={showPass}
									/>
								</>
							)}
						/>
						<TouchableOpacity
							onPress={() => { setShowPass(!showPass) }}
							style={styles.buttonEye}
						>
							<Ionicons
								name={showPass === false ? 'eye-outline' : 'eye-off-outline'}
								size={26}
								color='#E7484D'
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.inputContainer}>
						<Ionicons
							name="lock-closed-outline"
							size={24}
							color="#E7484D"
							style={styles.inputIcon}
						/>
						<Controller
							control={control}
							name="passwordConf"
							rules={{
								required: "Verifique su contraseña",
								validate: value => value === pwd ? true : "Las contraseñas no coinciden"
							}}
							render={({ field: { value, onChange }, fieldState: { error } }) => (
								<>
									{error && (
										<Text style={styles.textError}>{error.message}</Text>
									)}
									<TextInput
										value={value}
										style={error ? styles.inputError : styles.inputText}
										placeholder='Verificar Contraseña'
										autoCorrect={false}
										onChangeText={onChange}
										secureTextEntry={showConf}
									/>
								</>
							)}
						/>
						<TouchableOpacity
							onPress={() => { setShowConf(!showConf) }}
							style={styles.buttonEye}
						>
							<Ionicons
								name={showConf === false ? 'eye-outline' : 'eye-off-outline'}
								size={26}
								color='#E7484D'
							/>
						</TouchableOpacity>
					</View>
					{/* Botón Registrarte */}
					<TouchableOpacity onPress={handleSubmit(sendRegisterData)} >
						<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.logInButton}>
							<Text style={{ color: 'white', fontWeight: 'bold' }}>Registrarte</Text>
						</LinearGradient>
					</TouchableOpacity>
					{/* Boton Cambiar a pantalla de iniciar sesion */}
					<TouchableOpacity
						onPress={() => navigation.navigate('LogIn')}
					>
						<Text style={styles.forgotPW}>¿Ya tienes una cuenta?, ¡Inicia Sesión!</Text>
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
		backgroundColor: '#FFFFFF',
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
	},
	logoSt: {
		height: '100%',
		width: '100%',
		alignSelf: 'center',
		resizeMode: 'contain'
	},
	body: {
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
		borderColor: '#E7484D',
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
		backgroundColor: '#70ABAF',
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