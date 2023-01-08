import React, { useState } from "react";
import {
	TouchableOpacity,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	Image,
	View
} from "react-native";
import { useDispatch } from 'react-redux';
import { logIn as logInRedux } from '../../state/authSlice.js';
import { useForm, Controller } from "react-hook-form";
import { login } from "../../services/auth.services";
import Spinner from 'react-native-loading-spinner-overlay';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

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
			if (result.data.token) {
				dispatch(logInRedux(result.data.token));
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
				<View style={styles.contentContainer}>
					<Spinner
						visible={loading}
						textContent={'Cargando...'}
					/>
					<Text style={styles.body}>Inicia sesión en tu Cuenta</Text>

					{/* Email Input */}
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

					{/* Password Input */}
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
							render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
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
								color='#E7484D'
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

					<Text style={{ textAlign: 'center' }}>o Inicia Sesión con:</Text>

					{/* Botones de Aplicaciones */}
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							onPress={() => navigation.navigate('HomeScreen')}
							style={styles.button}>
							<Image
								source={{
									uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
								}}
								style={{ width: 40, height: 40 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('HomeScreen')}
							style={styles.button}>
							<Image
								source={{
									uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'
								}}
								style={{ width: 40, height: 40 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate('HomeScreen')}
							style={styles.button}>
							<Image
								source={{
									uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'
								}}
								style={{ width: 40, height: 40 }}
							/>
						</TouchableOpacity>
					</View>
					{/* Boton Cambiar a pantalla de registro */}
					<TouchableOpacity
						onPress={() => navigation.navigate('SignIn')}
					>
						<Text style={styles.forgotPW}>¿No tienes una cuenta?, ¡Registrate Ahora!</Text>
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
		marginTop: 75,
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
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#DFE3E630',
		marginTop: 20,
		marginBottom: 40,
	},
	button: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'FFFFFF70',
		padding: 16,
		borderWidth: 2,
		borderColor: 'white',
		borderRadius: 16,
		marginHorizontal: 10,
	},
	inputContainer: {
		width: '100%',
		height: 60,
		backgroundColor: 'white',
		borderRadius: 25,
		marginBottom: 20,
		justifyContent: 'center'
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