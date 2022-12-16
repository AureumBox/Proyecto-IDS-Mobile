import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../../../components/HeaderComponent";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";
import NoStickerSlot from "./NoStickerSlot";
import StickerTemplate from "../../../components/StickerTemplate";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

import { useDispatch, useSelector } from "react-redux";
import * as albumSlice from "../../../state/albumSlice.js";
import { setPercentage, setCurrentTeam } from '../../../state/albumSlice.js';
import { store } from "../../../state/store";

import {
  fetchAlbumInfo,
  fetchPageInfo,
  fetchTeamsInfo
} from "../../../services/inventory.services";

export default function AlbumPage({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [showAlbum, setShowAlbum] = useState(false);
  const [eventId, setEventId] = useState(1);
  const [teamId, setTeamId] = useState(1);

  const { token } = useSelector((state) => state.auth);
  const teamName = useSelector((state) => state.album.currentTeam.name);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log(teamName)
      await loadPageInfo();
    })();
  }, [token]);

  const loadPageInfo = async () => {
    setLoading(true);
    try {
      const data = await fetchPageInfo(token, eventId, teamId);
      console.log(JSON.stringify(data));
      setPageInfo(res);
      // dispatch(albumSlice.saveTeamStickers(0));
      // console.log('qwertybb'+store.getState());
      setShowAlbum(true);
    } catch (error) {
      alert("asd" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.fondo}>
      <Header />
      <View style={styles.container}>
        <View style={styles.containerPor}>
          <ProgressBar />
          <TouchableOpacity>
            <Ionicons
              name="search-circle"
              size={40}
              color="#63130B"
              style={styles.lupa}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.albumfondo}>
          {/* Header del album */}
          <View style={styles.barra}>
            <TouchableOpacity style={styles.flecha}>
              <Entypo name="arrow-with-circle-left" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.nomPais}>
              <Text style={styles.pais}>{teamName}</Text>
            </View>
            <TouchableOpacity style={styles.flecha}>
              <Entypo name="arrow-with-circle-right" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.containerBarajitas}>
            {console.log(pageInfo)}
            {showAlbum ? (
              pageInfo?.item.stickers.map((sticker) => {
                sticker.isInAlbum ? (
                  <StickerTemplate />
                ) : (
                  console.log("no esta") /*<NoStickerSlot /> */
                );
              })
            ) : (
              <Text
                style={{
                  marginVertical: 30,
                  fontSize: 17,
                  textAlign: "center",
                }}
              >
                Ha ocurrido un error
              </Text>
            )}
          </View>
        </View>

        {/* Pagina */}
        {/* <View style={styles.containerBarajitas}>
            <StickerTemplate />
            <NoStickerSlot />
            <NoStickerSlot />
          </View>
          <View style={styles.containerBarajitas}>
            <NoStickerSlot />
            <NoStickerSlot />
            <NoStickerSlot />
          </View>
          <View style={styles.containerBarajitas}>
            <NoStickerSlot />
            <NoStickerSlot />
            <NoStickerSlot />
          </View>
        </View> */}

        <Carousel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#70ABAF",
  },
  albumfondo: {
    width: "85%",
    height: "60%",
    backgroundColor: "white",
    marginBottom: "3%",
    borderRadius: 5,
    justifyContent: "flex-start",
  },
  flecha: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  nomPais: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  barra: {
    backgroundColor: "#2A555E",
    width: "100%",
    height: "12%",
    resizeMode: "contain",
    borderRadius: 2,
    flexDirection: "row",
  },
  barajita: {
    backgroundColor: "#BBB9B9",
    width: "25%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  idbarajita: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
  containerBarajitas: {
    flex: 1,
    /*  flexWrap: "wrap",
    alignContent: "space-around", */
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "29%",
    width: "100%",
  },
  containerPor: {
    height: "9%",
    width: "90%",
    marginBottom: "2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  texto: {
    fontWeight: "bold",
    color: "black",
    fontSize: 26,
  },
  pais: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  barraPorcentaje: {
    width: "60%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  Porcentaje: {
    width: "30%", //Para calcular el porcentaje de llenado de la barra
    height: "100%",
    backgroundColor: "#63130B",
    borderRadius: 10,
    flexDirection: "row",
  },
  carruselcontainer: {
    width: "90%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  carrusel: {
    flexDirection: "row",
    width: "90%",
    height: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  fondo: {
    flex: 1,
    backgroundColor: "#70ABAF",
  },
  textSt: {
    color: "#2A555E",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 3,
  },
});
