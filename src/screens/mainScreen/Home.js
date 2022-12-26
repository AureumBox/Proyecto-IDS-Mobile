import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import Header from '../../components/HeaderComponent';
import Sobre from '../../../assets/app/sobre.png';

export default function Home({ navigation }) {
    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.textSt}>
                    Bienvenido usuario
                </Text>
                <View style={styles.sobreContainer}>
                <Image source={Sobre} style={styles.sobreImg}></Image>
                <View style={styles.botonReclamar}>
                    <Text style={styles.textReclamar}>Reclamar</Text>
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
        justifyContent: 'space-evenly',
        backgroundColor: '#70ABAF',
    },
    sobreImg:{
        height: '75%',
        resizeMode: 'contain'
    },
    sobreContainer:{
        backgroundColor: 'white',
        width: '55%',
        height: '40%',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center'
    },
    botonReclamar:{
        backgroundColor: '#70ABAF',
        borderRadius: 20,
        height: '15%',
        width: '60%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    fondo: {
        flex: 1,
        backgroundColor: '#70ABAF',
    },
    textSt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
    },
    textReclamar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

})