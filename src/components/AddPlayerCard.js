import React, { useState } from "react";
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
  Ionicons,
} from "@expo/vector-icons";
import { ModalMercado } from "./ModalMercado";

import JugadorBra from "../../assets/app/bra_10.png";
import MoneyIcon from "../../assets/app/moneyIcon.png";
import Reloj from "../../assets/app/reloj.png";
import Bra from "../../assets/app/bra.png";


export default function AddPlayerCard() {
  const { height, width } = Dimensions.get("window");

  //Visible Modal Ofertas Globales - Ofertar
  const [visible1, setVisible1] = useState(false);
  const hideDialog = () => setVisible1(false);


  return (
    <View style={styles.card}>
      <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.imgCard}>
        <View style={styles.containerPlayerName}>
          <Text style={styles.playerName}>Neymar Jr</Text>
        </View>
        <View>
          <Image style={styles.imagePlayer} source={JugadorBra} />
        </View>
      </LinearGradient>
      <View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", width: 100, margin: 3 }}
        >
          <Image
            style={{ height: 20, width: 20, marginLeft: -45 }}
            source={Bra}
          />
          <LinearGradient
            colors={["#D13256", "#FE5F42"]}
            style={{ borderRadius: 10, marginLeft: 25 }}
          >
            <Text style={styles.posiciontext}>DELANTERO</Text>
          </LinearGradient>
        </View>
        
        <View style={{flexDirection:'row', marginTop: 15, marginLeft: 110}}>
        <Text style={{fontSize: 18, color: '#77798C', fontWeight: '600'}}>PTS </Text>
        <Text style={{fontSize: 28, color: '#3D405B', fontWeight: '800'}}>49</Text>
        </View>
      </View>
   

    </View>
  );
}

const styles = StyleSheet.create({
  fondoModal: {
    width: '100%',
    height: 85,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  circuloBlanco: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    marginTop: 15
  },
  circuloDeg: {
    height: 110,
    width: 110,
    borderRadius: 60,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1,
    marginTop: 20
  },
  fotocirculo: {
    resizeMode: 'contain',
    height: 115,
    alignSelf: 'center'
  },
  subtexto:{
    fontSize: 11, 
    marginBottom: 2, 
    fontWeight: '500', 
    color: '#3D405B'
  },
  containerDinero:{
    flexDirection: 'row',
    width: '100%', 
    height: 30, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  money:{
    height: 25, 
    width: 80, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20
  },
  oferta:{
    width: 75, 
    height: 20, 
    backgroundColor: 'white', 
    borderRadius: 20, 
    padding: 3, 
    paddingLeft: 4, 
    fontWeight: '600'
  },
  moneyCoin:{
    height: 20,
    width: 20, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    alignSelf: 'center'
  },
  containerButtons: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 30,
    paddingTop: 20
  },
  whitebutton: {
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
    fontWeight: "bold",
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
    width: "100%",
    height: 115,
    flexDirection: "row",
    marginTop: 10,
  },
  imgCard: {
    height: "100%",
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    position: 'relative'
  },
  textbotones: {
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
});