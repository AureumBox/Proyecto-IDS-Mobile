import React, { useEffect, useState } from "react";
import * as Font from 'expo-font';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import Header from '../../components/HeaderComponent';
import AlbumDigital from '../../../assets/albumd.png';
import AlbumPage from "./AlbumPage";

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export default function Album({ navigation }) {
    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                    <View style={styles.containerPor}>
                <Text style={styles.texto}>30%</Text>
                <View style={styles.barraPorcentaje}>
                                            <View style={styles.Porcentaje}></View>
                        </View>
                </View>
            <View style={styles.rectangulo}>
                    <Image
                        source={AlbumDigital}
                        style={styles.albumdig}></Image>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate(AlbumPage)}
                    style={styles.carrusel}
                >
                    <Text style={styles.textSt}>¡Pega tus cromos!</Text>
                </TouchableOpacity>
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
    albumdig: {
        resizeMode: 'contain',
        width: width-60,
        marginLeft: 10
    },
    rectangulo: {
        width: width-60,
        height: width-30,
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerPor:{
        height: 30,
        width: width-20,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems:'center'
    },
    texto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26, 
        marginLeft: 25,
    },
    barraPorcentaje: {
        width: width-140,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 5
    },
    Porcentaje:{
        width: (width-140)*30/100, //Para calcular el porcentaje de llenado de la barra
        height: 30,
        backgroundColor: '#63130B',
        borderRadius: 10,
        flexDirection: 'row',
    },
    carrusel: {
        width: width-40,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fondo: {
        flex: 1,
        backgroundColor: '#70ABAF',
    },
    textSt: {
        fontWeight: 'bold',
        color: '#34545D',
        fontSize: 26,
    },
})