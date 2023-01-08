import React from "react";
import {
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Text,
	Image,
	View,
	Dimensions
} from "react-native";
import logoVerticalImg from '../../../assets/app/logoVertical.png';
import LlenarAlbum from '../../../assets/app/LlenarAlbum.png';
import Participafantasy from '../../../assets/app/Participafantasy.png';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
	const { height } = Dimensions.get('window');
	const [opciones, setOpciones] = useState(1);

	return (
		<View style={styles.container}>
			<View style={{ width: '100%', height: '72%', backgroundColor: '#F2F6FF' }}>
				<View style={{ backgroundColor: "#F2F6FF", width: '100%', height: '92%' }}>
					{opciones == 1 ?
						<SafeAreaView>
							<Image source={logoVerticalImg} style={{ resizeMode: 'contain', height: '80%', alignSelf: 'center' }} />
							<View style={styles.contentContainer}>
								<Text style={styles.title}>¡Bienvenido a Offside!</Text>
								<Text style={styles.body}>Organiza, colecciona y compite en una liga llena de amigos con tu equipo de ensueño favorito</Text>
							</View>
						</SafeAreaView>
						: null}
					{opciones == 2 ?
						<View>
							<Image source={LlenarAlbum} style={{ resizeMode: 'contain', height: '70%', alignSelf: 'center' }} />
							<View style={styles.contentContainer}>
								<Text />
								<Text />
								<Text />
								<Text style={styles.title}>Llena tu álbum</Text>
								<Text style={styles.body}>Colecciona todos los cromos y llena tu álbum con tus jugadores favoritos</Text>
							</View>
						</View>
						: null}
					{opciones == 3 ?
						<View>
							<Image source={Participafantasy} style={{ resizeMode: 'contain', height: '70%', alignSelf: 'center' }} />
							<View style={styles.contentContainer}>
								<Text />
								<Text />
								<Text />
								<Text style={styles.title}>Participa en el fantasy</Text>
								<Text style={styles.body}>Crea tu equipo de ensueño y participa en una liga para ganar puntos</Text>
							</View>
						</View>
						: null}
				</View>
				<View style={{ backgroundColor: "#F2F6FF", marginTop: 15, width: '50%', alignSelf: 'center', height: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
					<TouchableOpacity style={opciones == 1 ? styles.buttonOp1 : styles.buttonOp2}
						onPress={() => setOpciones(1)}>
					</TouchableOpacity>
					<TouchableOpacity style={opciones == 2 ? styles.buttonOp1 : styles.buttonOp2}
						onPress={() => setOpciones(2)}>
					</TouchableOpacity>
					<TouchableOpacity style={opciones == 3 ? styles.buttonOp1 : styles.buttonOp2}
						onPress={() => setOpciones(3)}>
					</TouchableOpacity>
				</View>
			</View>
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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F2F6FF',
	},
	buttonOp1: {
		backgroundColor: '#E7484D',
		height: 12,
		width: 100,
		borderRadius: 7
	},
	buttonOp2: {
		backgroundColor: '#C9C5C5',
		height: 12,
		width: 40,
		borderRadius: 7
	},
	button1: {
		backgroundColor: 'blue',
		height: '75%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		marginBottom: 5
	},
	button2: {
		backgroundColor: '#F2F6FF',
		height: '90%',
		width: '98%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
	},
	contentContainer: {
		paddingHorizontal: 20,
		marginTop: '-10%'
	},
	title: {
		fontSize: 26,
		fontWeight: '700',
		lineHeight: 25,
		marginTop: 12,
		textAlign: 'center',
		color: '#3A4159',
	},
	body: {
		paddingTop: 20,
		fontSize: 16,
		lineHeight: 23,
		fontWeight: '500',
		textAlign: 'center',
		color: '#353147',
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