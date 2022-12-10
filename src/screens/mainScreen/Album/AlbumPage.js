import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";
import Header from '../../../components/HeaderComponent';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";
import NoStickerSlot from "./NoStickerSlot";



const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

import { useDispatch, useSelector } from "react-redux";

export default function AlbumPage({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(false);
    const { token } = useSelector(state => state.auth);



    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
                <ProgressBar/>
                <View style={styles.albumfondo}>

                    {/* Header del album */}
                    <View style={styles.barra}>
                        <TouchableOpacity style={styles.flecha} >
                            <Entypo name="arrow-with-circle-left" size={24} color="white" />
                        </TouchableOpacity>
                        <View style={styles.nomPais}>
                            <Text style={styles.pais}>NombrePaís</Text>
                        </View>
                        <TouchableOpacity style={styles.flecha}>
                            <Entypo name="arrow-with-circle-right" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Pagina */}
                    <View style={styles.containerBarajitas}>
                        <NoStickerSlot/>
                        <NoStickerSlot/>
                        <NoStickerSlot/>
                        {/* <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_1</Text>
                            <Text style={styles.idbarajita}>nameid_1</Text>
                        </View>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_2</Text>
                            <Text style={styles.idbarajita}>nameid_2</Text>
                        </View>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_3</Text>
                            <Text style={styles.idbarajita}>nameid_3</Text>
                        </View> */}
                    </View>
                    <View style={styles.containerBarajitas}>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_4</Text>
                            <Text style={styles.idbarajita}>nameid_4</Text>
                        </View>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_5</Text>
                            <Text style={styles.idbarajita}>nameid_5</Text>
                        </View>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_6</Text>
                            <Text style={styles.idbarajita}>nameid_6</Text>
                        </View>
                    </View>
                    <View style={styles.containerBarajitas}>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_7</Text>
                            <Text style={styles.idbarajita}>nameid_7</Text>
                        </View>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_8</Text>
                            <Text style={styles.idbarajita}>nameid_8</Text>
                        </View>
                        <View style={styles.barajita}>
                            <Text style={styles.idbarajita}>id_9</Text>
                            <Text style={styles.idbarajita}>nameid_9</Text>
                        </View>
                    </View>
                </View>

                {/* Carousel */}
                {/* <View
                    style={styles.carruselcontainer}
                >
                    <Text style={styles.textSt}>¡Pega tus cromos!</Text>
                    <View style={styles.carrusel}>
                        <View style={styles.barajita}><Text style={styles.idbarajita}>Cromo</Text></View>
                        <View style={styles.barajita}><Text style={styles.idbarajita}>Cromo</Text></View>
                        <View style={styles.barajita}><Text style={styles.idbarajita}>Cromo</Text></View>
                    </View>
                </View> */}
                <Carousel/>
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
        width: '85%',
        height: '60%',
        backgroundColor: 'white',
        marginBottom: '3%',
        borderRadius: 5,
        justifyContent: 'flex-start',
    },
    flecha: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nomPais: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    barra: {
        backgroundColor: '#2A555E',
        width: '100%',
        height: '12%',
        resizeMode: 'contain',
        borderRadius: 2,
        flexDirection: 'row',
    },
    barajita: {
        backgroundColor: '#BBB9B9',
        width: '25%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    idbarajita: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14,
    },
    containerBarajitas: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '29%',
        width: '100%',
    },
    containerPor: {
        height: '9%',
        width: '90%',
        marginBottom: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    texto: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26,
    },
    pais: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
    },
    barraPorcentaje: {
        width: '60%',
        height: '50%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    Porcentaje: {
        width: '30%', //Para calcular el porcentaje de llenado de la barra
        height: '100%',
        backgroundColor: '#63130B',
        borderRadius: 10,
        flexDirection: 'row',
    },
    carruselcontainer: {
        width: '90%',
        height: '25%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
    },
    carrusel: {
        flexDirection: 'row',
        width: '90%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    fondo: {
        flex: 1,
        backgroundColor: '#70ABAF',
    },
    textSt: {
        color: '#2A555E',
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 3,
    },
})
