import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Header from '../../components/HeaderComponent';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

export default function AlbumPage({ navigation }) {

    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                <View style={styles.containerPor}>
                         <Text style={styles.texto}>30%</Text>
                        <View style={styles.barraPorcentaje}>
                             <View style={styles.Porcentaje}></View>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="search-circle" size={40} color="#63130B" style={styles.lupa}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.albumfondo}>
                        <View style={styles.barra}>
                            <Text style={styles.pais}>País</Text>
                        </View>
                    </View>
                    <View
                        style={styles.carrusel}
                     >
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
    albumfondo: {
        width: width-60,
        height: height-(height-width)-30,
        backgroundColor: 'white',
        marginBottom: 15,
        borderRadius: 5,
        justifyContent: 'flex-start',
    },
    barra: {
        backgroundColor:'#2A555E',
        width: width-60,
        height: height-890,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    containerPor:{
        height: 30,
        width: width-20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems:'center',
        marginTop: -65
    },
    texto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26, 
        marginLeft: 35,
    },
    pais: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 26, 
    },
    barraPorcentaje: {
        width: width-200,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 5
    },
    Porcentaje:{
        width: (width-200)*30/100, //Para calcular el porcentaje de llenado de la barra
        height: 30,
        backgroundColor: '#63130B',
        borderRadius: 10,
        flexDirection: 'row',
    },
    lupa: {
        marginTop: -6,
        marginLeft: 10
    },
    carrusel: {
        width: width-40,
        height: width-230,
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
        color: '#C10001',
        fontWeight: 'bold',
        fontSize: 26,
    },
})