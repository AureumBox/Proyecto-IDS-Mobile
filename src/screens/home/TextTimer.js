import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

import { ModalPopup } from "../../components/ModalPopup";
import StickerTemplate from "../../components/StickerTemplate";
import * as eventServices from "../../services/event.services";
import { obtainStickers } from "../../services/sticker.services";
import * as stickerServices from "../../services/sticker.services";
import { watchAd, getAdRedirectUrl } from "../../services/ad.services";
import * as userServices from "../../state/authSlice";
import * as fantasyServices from "../../state/fantasySlice";
import sobreImg from "../../../assets/app/sobre.png";
import albumImg from "../../../assets/app/album.png";
import fantasyImg from "../../../assets/app/fantasy.png";
import useTimer from "../../components/useTimer";

export default function TextTimer({ setIsAvailable }) {
  const { hours, minutes, seconds } = useTimer();

  useEffect(() => {
    if (/*  hours == 0 &&  minutes == 0 && */seconds == 0) setIsAvailable(true);
  }, [seconds]);

  return (
    <Text style={styles.textoSecondary}>
      {(hours < 10 && "0")}{hours}:{(minutes < 10 && "0")}{minutes}:{(seconds < 10 && "0")}{seconds}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
  },
  modalHeader: {
    width: "100%",
    paddingVertical: 20,
    // alignItems: "flex-end",
    // justifyContent: "center",
  },
  logInButton: {
    backgroundColor: "#70ABAF",
    padding: 20,
    borderRadius: 120,
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  espacio: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    paddingRight: 15,
    paddingLeft: 70,
  },
  casilla: {
    height: 40,
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  botonSecondary: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 30,
    marginTop: 7,
    marginRight: 8,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3A4159",
    borderWidth: 2,
  },
  containerCuadro: {
    backgroundColor: "#8FCCCA",
    marginTop: 10,
    borderRadius: 12,
    height: 200,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  containerinfo: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  boton: {
    height: 30,
    width: 100,
    borderRadius: 20,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  botonSobre: {
    height: 30,
    width: 100,
    borderRadius: 20,
    marginTop: 7,
    marginLeft: 210,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImg: {
    width: "100%",
    height: 110,
    alignItems: "center",
  },
  containerImgAlbum: {
    width: "100%",
    height: 110,
    alignItems: "flex-end",
    marginLeft: 20,
    flexDirection: "column",
  },
  sobreImg: {
    marginTop: 15,
    height: "140%",
    resizeMode: "contain",
  },
  barraProgreso: {
    height: 20,
    width: 150,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginTop: -125,
    marginRight: 60,
  },
  porcentaje: {
    height: "100%",
    width: "50%", //Colocar porcentaje de llenado
    backgroundColor: "#3A4159",
    borderRadius: 20,
    alignItems: "center",
  },
  fondo: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  textSt: {
    color: "#3A4159",
    fontWeight: "bold",
    fontSize: 26,
  },
  textoEvento: {
    color: "#3D405B",
    fontWeight: "medium",
    fontSize: 14,
    marginTop: 5,
  },
  textoFeature: {
    color: "#3A4159",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
  },
  textoSecondary: {
    color: "#808080",
    fontWeight: "light",
    fontSize: 12,
    marginTop: 2,
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  textoBotonSeconday: {
    color: "#3D405B",
    fontWeight: "bold",
    fontSize: 14,
  },
});
