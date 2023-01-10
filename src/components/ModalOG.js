import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { ModalMercado } from "./ModalMercado";

import JugadorBra from "../../assets/app/bra_10.png";
import MoneyIcon from "../../assets/app/moneyIcon.png";
import Reloj from "../../assets/app/reloj.png";
import Bra from "../../assets/app/bra.png";


export default function ModalOG({ onClose }) {
    //Visible Modal Ofertas Globales
    const hideDialog = () => setVisible1(false);
    return (
        <View>
        <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.fondoModal}> 
        </LinearGradient>
        <View style={styles.circuloBlanco}/>
        <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.circuloDeg}> 
        <Image source={JugadorBra} style={styles.fotocirculo}/>
        </LinearGradient>
        <Text style={styles.nombreJugador}>Neymar Jr</Text>  

        <View style={{width:'100%', height: 70, flexDirection: 'row'}}>
          <View style= {{width: '50%', height: 70, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 11, marginBottom: 2, fontWeight: '500', color: '#3D405B', marginLeft: 15}}>Oferta ganadora actual</Text>
          <View style={{flexDirection: 'row', width: '100%', height: 30, alignItems: 'flex-start', justifyContent: 'center'}}>
          <View style={{flexDirection: 'column', width: '69%', height: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={MoneyIcon} style={{resizeMode: 'contain', height: 25, position: 'absolute', alignSelf: 'flex-start'}}/> 
          </View> 
          <View style={{flexDirection: 'column', width: '60%', height: '100%', alignSelf: 'flex-start', justifyContent: 'center'}}>
          <Text style={{fontWeight: '600', position: 'absolute', marginLeft: 1}}>150</Text> 
          </View>
          </View>
          </View>
          <View style= {{width: '50%', height: 70, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 11, marginBottom: 2, fontWeight: '500', color: '#3D405B'}}>Mi oferta</Text>
          <LinearGradient colors={["#D13256", "#FE5F42"]} style={{height: 25, width: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}> 
          <TextInput style={{width: 75, height: 20, backgroundColor: 'white', borderRadius: 20, padding: 3, paddingLeft: 4, fontWeight: '600'}}/> 
          </LinearGradient>
          <Text style={{fontSize: 9, color: '#00DB71', fontWeight: '700', marginTop: 3}}> (+ $100)</Text>
          </View>
        </View> 
        <View style= {{width: '100%', height: 70, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
          <Text style={{fontSize: 11, marginBottom: 2, fontWeight: '500', color: '#3D405B', marginLeft: 3}}>Saldo luego de la operación</Text>
          <View style={{flexDirection: 'row', width: '100%', height: 30, alignItems: 'flex-start', justifyContent: 'center'}}>
          <View style={{flexDirection: 'column', width: '20%', height: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={MoneyIcon} style={{resizeMode: 'contain', height: 25, position: 'absolute', alignSelf: 'flex-start'}}/> 
          </View> 
          <View style={{flexDirection: 'column', width: '50%', height: '100%', alignSelf: 'flex-start', justifyContent: 'center'}}>
          <Text style={{fontWeight: '600', position: 'absolute', marginLeft: 45}}>150</Text> 
          </View>
          </View>
          </View>

        <View style={styles.containerButtons}>
        <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.editButtonacep}>
        <TouchableOpacity onPress={onClose()}
          style={styles.whitebutton}
        >
            <Text style={{color: '#E6474E', fontWeight: '600'}} onPress={hideDialog}>Cancelar</Text>
        </TouchableOpacity>
        </LinearGradient>  

        <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.editButtonacep}>
        <TouchableOpacity onPress={() => {setVisible1(false)}}>
            <Text style={{color: '#fff', fontWeight: '600'}}>Aceptar</Text> 
        </TouchableOpacity>
        </LinearGradient>   
        </View>
        </View>
 
    );
}
const styles = StyleSheet.create({
    fondoModal:{
      width: '100%',
      height: 85,
      backgroundColor: 'pink',
      alignSelf: 'center',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    circuloBlanco:{
      height: 120, 
      width: 120, 
      borderRadius:60, 
      backgroundColor: 'white', 
      alignSelf: 'center', 
      position: 'absolute', 
      zIndex: 1, 
      marginTop: 15
    },
    circuloDeg:{
      height: 110, 
      width: 110, 
      borderRadius:60, 
      alignSelf: 'center', 
      position: 'absolute', 
      zIndex: 1, 
      marginTop: 20
    },
    fotocirculo:{
      resizeMode: 'contain', 
      height: 115, 
      alignSelf: 'center'
    },
    containerButtons:{
      flexDirection: 'row', 
      width: '80%', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      alignSelf: 'center', 
      paddingBottom: 30,
      paddingTop: 20
    },
    whitebutton:{
      height: 25, 
      width: 105, 
      backgroundColor: 'white', 
      borderRadius: 30, 
      alignSelf: 'center', 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    saldost: {
      padding: 10,
      borderRadius: 20,
      margin: 10,
      fontSize: 30,
      fontWeight:"bold",
  },
  nombreJugador: {
      alignSelf: 'center',
      borderColor: '#B02419',
      fontSize: 20,
      marginTop: 50,
      fontWeight: 'bold',
      marginBottom: 20
  },
  infoData: {
      borderWidth: 3,
      borderColor: '#B02419',
      padding: 8,
      borderRadius: 20,
      margin: 10,
      width: "100%",
  },
  editButtonacep: {
      backgroundColor: '#B02419',
      width: 110,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
  },
  imagePlayerDialog: {
      width: 100, 
      height: 100,  
      borderRadius: 100,
      resizeMode: 'stretch',
      borderWidth: 3,
      borderColor: '#B02419',
  },
  editButtoncanc: {
      backgroundColor: '#B02419',
      width: 110,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',   
      borderRadius: 30,
  },
    editButton: {
      width: 90,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
    },
    posiciontext: {
      paddingLeft: 3,
      paddingRight: 3,
      fontSize: 10,
      lineHeight: 25,
      color: "white",
      fontWeight: "500",
    },
    textCard: {
      fontSize: 12,
      lineHeight: 25,
      color: "black",
      fontWeight: "600",
    },
    containerPlayerName: {
      transform: [{ rotate: "-90deg" }],
      position: "absolute",
      left: 0,
      top: 0,
      paddingTop: 10,
      width: 100,
      alignItems: "center",
      bottom: "-0.1%",
    },
    imagePlayer: {
      height: 115,
      marginLeft: 20,
      resizeMode: "contain",
    },
    playerName: {
      fontWeight: "bold",
      fontSize: 14,
      color: "#FFFFFF",
    },
    card: {
      backgroundColor: "white",
      borderRadius: 10,
      width: "93%",
      height: 115,
      position: "relative",
      flexDirection: "row",
      marginTop: 10,
    },
    imgCard: {
      height: "100%",
      width: 100,
      borderRadius: 10,
      justifyContent: "center",
      flexDirection: "row",
    },
    textbotones: {
      fontSize: 10,
      color: "white",
      fontWeight: "bold",
    },
  });
  