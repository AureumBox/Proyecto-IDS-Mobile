import React, { useEffect, useState} from "react";
import * as Font from 'expo-font';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from "react-native";

import Header from '../../components/HeaderComponent';
import AlbumDigital from '../../../assets/albumd.png';

export default function Album({ navigation }) {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    useEffect(() => {
        if ( !fontsLoaded ) {
            loadFonts()
        }   
    })

    const loadFonts = async () => {
        await Font.loadAsync({
            'averta-demo-pe': require('../../../assets/fonts/Anton-Regular.ttf')
        })

        setFontsLoaded(true)
    }



    const { height } = Dimensions.get('window')

    return (
        <View style={styles.fondo}>
        <Header/>
        <View style={styles.container}>
        <View style={styles.barraPorcentaje}>
        <Text style={styles.texto}>30%</Text>
        <View style={styles.Porcentaje}></View>    
        </View>
            <View style={styles.rectangulo}>
                <Image
                source={AlbumDigital}
                style={styles.albumdig}></Image>
            </View>
            <View style={styles.carrusel}>
            <Text style={styles.textSt}>¡Pega tus cromos!</Text>    
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
    albumdig:{
        resizeMode: 'contain',
        width: 420,
        marginLeft: 10
    },
    rectangulo: {
        width: 350,
        height: 460,
        backgroundColor: 'white',
        marginBottom: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26,
        marginLeft: -63, 
    },
    barraPorcentaje:{
        width: 250,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        flexDirection: 'row',
        marginLeft: 55
    },
    Porcentaje:{
        width: 80,
        height: 40,
        backgroundColor: '#63130B',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 170,
        marginLeft: 5,
    },
    carrusel: {
        width: 350,
        height: 65,
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
        // fontFamily: 'averta-demo-pe',
    },
})