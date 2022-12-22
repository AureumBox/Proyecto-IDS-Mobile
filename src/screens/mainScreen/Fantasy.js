import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
} from "react-native";
import Header from '../../components/HeaderComponent';
import Cancha from '../../../assets/cancha.jpg';
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function Fantasy({ navigation }) {
    const { height } = Dimensions.get('window')

    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                <View style={styles.containerpuntaje}>
                    <Text style={styles.textSt}>FANTASY</Text>
                    <View style={styles.puntajeBoton}>
                        <Text style={styles.textoBoton}>Ver puntajes</Text>
                    </View>
                    </View>
                <View style={styles.container2}>
                <Image source={Cancha} style={styles.imCancha}></Image>
                    <Text style={styles.texto}>¡Arma tu equipo!</Text>
                    <View style={styles.carruselContainer}>
                        <View style={styles.cont}>
                        <Text style={styles.bancas}>Bancas</Text>
                        <View style={styles.opciones}></View>
                        </View>
                        <View style={styles.carrusel}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#70ABAF',
    },
    cont:{
        height: '20%',
        width:'100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'
    },
    opciones:{
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: 'white',
        marginLeft: '60%'
        },
    bancas:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    puntajeBoton:{
        width: 90,
        height: 20,
        backgroundColor: '#B02419',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerpuntaje:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    fondo: {
        flex: 1,
        backgroundColor: '#70ABAF',
    },
    textoBoton:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    textSt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    imCancha:{
        height: '62%',
        justifyContent: 'space-evenly',
        resizeMode: 'contain',
    },
    container2:{
        width:'100%',
        height:'90%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    carruselContainer:{
        width: '90%',
        height: '30%',
    },
    carrusel:{
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 3,
    }
})
