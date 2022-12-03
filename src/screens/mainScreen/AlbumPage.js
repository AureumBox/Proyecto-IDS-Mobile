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
import { Entypo } from '@expo/vector-icons';

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
                        <TouchableOpacity style={styles.flecha} >   
                            <Entypo name="arrow-with-circle-left" size={24} color="white"/>
                        </TouchableOpacity> 
                        <View style={styles.nomPais}>                   
                            <Text style={styles.pais}>NombrePaís</Text> 
                        </View> 
                        <TouchableOpacity style={styles.flecha}>
                        <Entypo name="arrow-with-circle-right" size={24} color="white" /> 
                        </TouchableOpacity> 
                        </View>
                       <View style={styles.containerBarajitas}>
                            <View style={styles.barajita}>
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
                            </View>
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
                    <View
                        style={styles.carruselcontainer}
                     >
                      <Text style={styles.textSt}>¡Pega tus cromos!</Text>  
                      <View style={styles.carrusel}>
                      <View style={styles.barajita}></View>
                      <View style={styles.barajita}></View>
                      <View style={styles.barajita}></View>
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
    albumfondo: {
        width: width-60,
        height: height-(height-width)-30,
        backgroundColor: 'white',
        marginBottom: 15,
        borderRadius: 5,
        justifyContent: 'flex-start',
    },
    flecha:{
       flex: 3,
       justifyContent: 'center',
       alignItems: 'center'
    },
    nomPais:{
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    barra: {
        backgroundColor:'#2A555E',
        width: width-60,
        height: height/20,
        resizeMode: 'contain',
        borderRadius: 2,
        flexDirection: 'row',
    },
    barajita:{
        backgroundColor: '#BBB9B9',
        width: (width-60)/4,
        height: (((height-(height-width)-30)-(height/20))/3)-6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    idbarajita:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16, 
    },
    containerBarajitas:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        height: ((height-(height-width)-30)-(height/20))/3,
        width: width-60,
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
        fontSize: 25, 
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
    carruselcontainer: {
        width: width-40,
        height: width-230,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
    },
    carrusel: {
        flexDirection: 'row',
        width: width-40,
        height: (((height-(height-width)-30)-(height/20))/3)-6,
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