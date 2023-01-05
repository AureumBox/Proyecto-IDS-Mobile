import React, { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import {
    StyleSheet,
    View,
    Text,
    Image, 
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/HeaderComponent';
import Sobre from '../../../assets/app/sobre.png';
import Album from '../../../assets/app/album.png';
import Fantasy from '../../../assets/app/fantasy.png';
import AlbumPage from './Album';
import FantasyPage from './Fantasy';


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
                        <View style={styles.containerImg}>
                            <Image source={Sobre} style={styles.sobreImg}></Image>
                        </View> 
                        <View style={styles.containerinfo}>
                            <Text style={styles.textoFeature}>Sobre diario</Text>
                            <Text style={styles.textoSecondary}>Disponible en 00:00:00</Text>
                            <TouchableOpacity>
                            <LinearGradient colors={['#D13256','#FE5F42']}
                            style={styles.botonSobre}>
                                <Text style={styles.textoBoton}>Reclamar</Text>
                            </LinearGradient>
                            </TouchableOpacity>
                        </View> 
                    </View> 
                    <View style={styles.containerCuadro}>
                        <View style={styles.containerImgAlbum}>
                            <Image source={Album} style={styles.sobreImg}></Image>
                            <View style={styles.barraProgreso}>
                                <View style={styles.porcentaje}>
                                    <Text style={{color: 'white'}}>30%</Text>
                                </View>
                            </View>
                            <Text style={{marginRight: 125, marginTop:1, color: '#3D405B', fontSize: 12}}>Completado</Text>    
                        </View> 
                        <View style={styles.containerinfo}>
                            <Text style={styles.textoFeature}>Álbum</Text>
                            <Text style={styles.textoSecondary}>Colecciona todos los cromos</Text>
                            <View style={styles.espacio}>
                                <View style={styles.casilla}>
                                    <TouchableOpacity>
                                    <View style={styles.botonSecondary}>
                                        <Text style={styles.textoBotonSeconday}>Intercambiar cromos</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.casilla}>
                                   <TouchableOpacity onPress={() => navigation.navigate(AlbumPage)}>
                                    <LinearGradient colors={['#D13256','#FE5F42']}
                                    style={styles.boton}>
                                <Text style={styles.textoBoton}>Ver álbum</Text>
                            </LinearGradient>
                            </TouchableOpacity> 
                            </View>
                            </View>
                        </View> 
                    </View> 
                    <View style={styles.containerCuadro}>
                        <View style={styles.containerImg}>
                            <Image source={Fantasy} style={styles.sobreImg}></Image>
                        </View> 
                        <View style={styles.containerinfo}>
                            <Text style={styles.textoFeature}>Fantasy</Text>
                            <Text style={styles.textoSecondary}>Arma tu equipo ideal</Text>
                            <View style={styles.espacio}>
                                <View style={styles.casilla}>
                                    <TouchableOpacity>
                                    <View style={styles.botonSecondary}>
                                        <Text style={styles.textoBotonSeconday}>Ver subastas</Text>
                                    </View>
                                    </TouchableOpacity>   
                                </View>
                                <View style={styles.casilla}>
                                <TouchableOpacity onPress={() => navigation.navigate(FantasyPage)}> 
                                <LinearGradient colors={['#D13256','#FE5F42']}
                                    style={styles.boton}>
                                    <Text style={styles.textoBoton}>Ver plantilla</Text>
                                </LinearGradient>
                                </TouchableOpacity>
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
        paddingLeft: 70
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
        marginRight: 8,
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerinfo:{
        backgroundColor: 'white',
        width: '100%',
        height: 90,
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12,
        paddingLeft: 10,
        paddingRight: 10,
        shadowColor: 'black',
        shadowOffset:{
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,  
        elevation: 3,      
    },
    boton:{
        height: 30,
        width: 100,
        borderRadius: 20,
        marginTop: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botonSobre:{
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
        alignItems: 'center'
    },
    containerImgAlbum:{
        width: '100%',
        height: 110,
        alignItems: 'flex-end',
        marginLeft: 20,
        flexDirection: 'column'
    },
    sobreImg:{
        marginTop: 15,
        height: '140%',
        resizeMode: 'contain'
    },
    barraProgreso:{
        height: 20,
        width: 150,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        marginTop: -125,
        marginRight: 60
    },
    porcentaje:{
        height: '100%',
        width: '50%', //Colocar porcentaje de llenado 
        backgroundColor: '#3D405B',
        borderRadius: 20,
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