import React, { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import {
    StyleSheet,
    View,
    Text,
    Image, 
    ScrollView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/HeaderComponent';
import Sobre from '../../../assets/app/sobre.png';


export default function Home({ navigation }) {
  const [selected, setSelected] = React.useState("");
  const [isFocus, setIsFocus]= useState(false);
  
  const data = [
      {key:'1', value:'Seleccione un evento', disabled:true},
      {key:'2', value:'FIFA World Cup 2022'},
      {key:'3', value:'Eurocopa'},
      {key:'4', value:'Uefa Champions League'},
  ];

    return (
        <View style={styles.fondo}>
            <Header />
            <View style={styles.container}>
            <ScrollView>  
                    <Text style={styles.textSt}>Home</Text>
                    <Text style={styles.textoEvento}>Evento</Text>
                    <SelectList setSelected={(val)=> setSelected(val)}
                    data={data}
                    save="value"
                    placeholder={!isFocus ? 'Seleccione un evento' : '...'}
                    onFocus={()=> setIsFocus(true)}
                    /> 
                    <View style={styles.containerCuadro}>
                        <View style={styles.containerImg}></View> 
                        <View style={styles.containerinfo}>
                            <Text style={styles.textoFeature}>Sobre diario</Text>
                            <Text style={styles.textoSecondary}>Disponible en 00:00:00</Text>
                            <LinearGradient colors={['#D13256','#FE5F42']}
                            style={styles.boton}>
                                <Text style={styles.textoBoton}>Reclamar</Text>
                            </LinearGradient>
                        </View> 
                    </View> 
                    <View style={styles.containerCuadro}>
                        <View style={styles.containerImg}></View> 
                        <View style={styles.containerinfo}>
                            <Text style={styles.textoFeature}>Álbum</Text>
                            <Text style={styles.textoSecondary}>Colecciona todos los cromos</Text>
                            <View style={styles.espacio}>
                                <View style={styles.casilla}>
                                    <View style={styles.botonSecondary}>
                                        <Text style={styles.textoBotonSeconday}>Intercambiar cromos</Text>
                                    </View>
                                </View>
                                <View style={styles.casilla}><LinearGradient colors={['#D13256','#FE5F42']}
                            style={styles.boton}>
                                <Text style={styles.textoBoton}>Ver álbum</Text>
                            </LinearGradient></View>
                            </View>
                        </View> 
                    </View> 
                    <View style={styles.containerCuadro}>
                        <View style={styles.containerImg}></View> 
                        <View style={styles.containerinfo}>
                            <Text style={styles.textoFeature}>Fantasy</Text>
                            <Text style={styles.textoSecondary}>Arma tu equipo ideal</Text>
                            <View style={styles.espacio}>
                                <View style={styles.casilla}>
                                    <View style={styles.botonSecondary}>
                                        <Text style={styles.textoBotonSeconday}>Ver subastas</Text>
                                    </View>   
                                </View>
                                <View style={styles.casilla}>
                                <LinearGradient colors={['#D13256','#FE5F42']}
                                    style={styles.boton}>
                                    <Text style={styles.textoBoton}>Ver plantilla</Text>
                                </LinearGradient>
                                </View>
                            </View>
                        </View> 
                    </View> 
            </ScrollView>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10
    },
    espacio:{
        height: 40,
        width: '100%',
        flexDirection: 'row',
        paddingRight: 15,
        paddingLeft: 100
    },
    casilla:{
        height: 40,
        width: '50%',
        justifyContent:'center',
        alignItems: 'flex-end',
    },
    botonSecondary:{
        backgroundColor: 'white',
        borderRadius: 20,
        height: 30,
        marginTop: 7,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3D405B',
        borderWidth: 2
    },
    containerCuadro:{
        backgroundColor: '#8FCCCA',
        marginTop: 10,
        borderRadius: 12,
        height: 200,
        resizeMode: 'contain',
    },
    containerinfo:{
        backgroundColor: 'white',
        width: '100%',
        height: 90,
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        paddingLeft: 10,
        paddingRight: 10
    },
    boton:{
        height: 30,
        width: 100,
        borderRadius: 20,
        marginTop: 7,
        marginLeft: 210,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImg:{
        width: '100%',
        height: 110,
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
    fondo: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    textSt: {
        color: '#3D405B',
        fontWeight: 'bold',
        fontSize: 26,
    },
    textoEvento: {
        color: '#3D405B',
        fontWeight: 'medium',
        fontSize: 14,
        marginTop: 5
    },
    textoFeature: {
        color: '#3D405B',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5
    },
    textoSecondary: {
        color: '#808080',
        fontWeight: 'light',
        fontSize: 12,
        marginTop: 2
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textoBotonSeconday: {
        color: '#3D405B',
        fontWeight: 'bold',
        fontSize: 14,
    },

})