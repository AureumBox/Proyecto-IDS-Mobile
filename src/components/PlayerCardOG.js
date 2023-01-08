import React from "react";
import { StyleSheet, 
    Text, 
    View, 
    Dimensions,
    Image,
    TouchableOpacity,} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import {
        MaterialIcons,
        MaterialCommunityIcons,
        Octicons
      } from "@expo/vector-icons";  

import JugadorBra from '../../assets/app/bra_10.png';
import MoneyIcon from '../../assets/app/moneyIcon.png';
import Reloj from '../../assets/app/reloj.png';
import Bra from '../../assets/app/bra.png';   

export default function PlayerCardOF(){
    const { height, width } = Dimensions.get('window')

    return(
        <View style={styles.card}>
                    <LinearGradient  colors={['#D13256', '#FE5F42']}
                    style={styles.imgCard}>    
                    <View style={styles.containerPlayerName}>
                        <Text style={styles.playerName}>Neymar Jr</Text>
                    </View>
                    <View>
                        <Image style={styles.imagePlayer} source={JugadorBra}/>
                    </View>
                    </LinearGradient>
                    <View>    
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3}}>
                        <Image style={{height: 20, width: 20, marginLeft: -45}} source={Bra}/>
                            <LinearGradient  colors={['#D13256', '#FE5F42']}
                            style={{borderRadius: 10, marginLeft:25}}>
                            <Text style={styles.posiciontext}>DELANTERO</Text>
                            </LinearGradient>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', margin: 3, paddingTop: 5}}>
                        <Image style={{height: 22, width: 22, marginRight:3, marginLeft: 3}} source={MoneyIcon}/>
                            <Text style={styles.textCard}>100.000.000</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 3}}>
                        <Image style={{height: 22, width: 22, marginRight:3, resizeMode: 'center', marginLeft:3}} source={Reloj}/>
                            <Text style={styles.textCard}>2h 20s</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10, width: 110, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center'}}>
                    <TouchableOpacity>    
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Ofertar</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <LinearGradient  style={styles.editButton} colors={['#D13256', '#FE5F42']}>
                        <Text style={styles.textbotones}>Compra directa</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>
    );
    
};

const styles = StyleSheet.create({
    editButton: {
        width: 90,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    posiciontext: {
        paddingLeft:3,
        paddingRight:3,
        fontSize: 10,
        lineHeight: 25,
        color: 'white',
        fontWeight: '500'
    },
    textCard: {
        fontSize: 12,
        lineHeight: 25,
        color: 'black',
        fontWeight: '600'
    },
    containerPlayerName: {
        transform: [{ rotate: '-90deg'}],
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: 10,
        width: 100,
        alignItems: 'center',
        bottom: '-0.1%',
    },
    imagePlayer: {
        height: 115, 
        marginLeft: 20, 
        resizeMode: 'contain'
    },
    playerName: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFFFFF',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '93%',
        height: 115,
        position: 'relative',
        flexDirection: 'row',
        marginTop: 10
    },
    imgCard:{
        height: '100%',
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textbotones:{
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    }
})