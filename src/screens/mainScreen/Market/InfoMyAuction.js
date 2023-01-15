import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ModalMercado } from "../../../components/ModalMercado";

import * as marketServices from "../../../services/market.services";
import { useDispatch, useSelector } from "react-redux";

import JugadorBra from "../../../../assets/app/bra_10.png";

const convertTime = (finishDate) => {
  const actual = new Date(Date.now());
  const end = new Date(Date.parse(finishDate));

  let minutes = Math.floor((end - actual) / 60000);
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return hours + "h " + minutes + "m";
};

export default function InfoMyAuction({
  auctionData = {},
  setVisible,
  visible,
}) {
  const { height, width } = Dimensions.get("window");
  const { token } = useSelector((state) => state.auth);
  const { money } = useSelector((state) => state.auth);
  const { currentEventId } = useSelector((state) => state.auth);
  const [auctionInfo, setAuctionInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [bid, setBid] = useState(0);

  const positionSpa = {
    goalkeeper: "Arquero",
    defender: "Defensa",
    midfielder: "Medio Campo",
    forward: "Delantero",
  };

  const editBid = async () => {
    setLoading(true);
    try {
      const data = await marketServices.updateBid(
        token,
        currentEventId,
        auctionInfo?.market?.id,
        bid,
        auctionInfo?.myLastBid?.id
      );
      alert(data.message);
      setVisible(false);
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadAuctionInfo = useCallback(async () => {
    setLoading(true);
    try {
      const data = await marketServices.fetchAuctionInfo(
        token,
        currentEventId,
        auctionData?.id
      );

      setAuctionInfo(data.item);
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    loadAuctionInfo();
  }, [loadAuctionInfo]);

  return (
    <ModalMercado visible={visible}>
      <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.fondoModal}>
        <TouchableOpacity>
          <Ionicons
            name="help-circle-outline"
            size={26}
            color="black"
            style={{
              position: "absolute",
              alignSelf: "flex-end",
              paddingRight: 10,
              paddingTop: 3,
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.circuloBlanco} />
      <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.circuloDeg}>
        <Image source={{uri: auctionData?.sticker?.img}} style={styles.fotocirculo} />
      </LinearGradient>
      <Text style={styles.nombreJugador}>
        {auctionData?.sticker?.playerName}
      </Text>

      <View style={{ width: "100%", height: 70, flexDirection: "row" }}>
        {/* Precio inicial*/}
        <View
          style={{
            width: "50%",
            height: 70,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.subtexto}>Precio inicial</Text>
          <View style={styles.containerDinero}>
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={styles.moneyCoin}
            >
              <MaterialIcons name="attach-money" size={18} color="white" />
            </LinearGradient>
            <Text style={{ fontWeight: "600", marginLeft: 2 }}>{auctionInfo?.market?.initialPurchaseValue}</Text>
          </View>
        </View>

        {/* Compra directa*/}
        <View
          style={{
            width: "50%",
            height: 70,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.subtexto}>Precio de compra directa</Text>
          <View style={styles.containerDinero}>
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={styles.moneyCoin}
            >
              <MaterialIcons name="attach-money" size={18} color="white" />
            </LinearGradient>
            <Text style={{ fontWeight: "600", marginLeft: 2 }}>{auctionInfo?.market?.immediatePurchaseValue}</Text>
          </View>
        </View>
      </View>

      {/* Oferta actual */}
      <View
        style={{
          width: "100%",
          height: 70,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.subtexto}>Oferta ganadora actual</Text>
        <View style={styles.containerDinero}>
          <LinearGradient
            colors={["#D13256", "#FE5F42"]}
            style={styles.moneyCoin}
          >
            <MaterialIcons name="attach-money" size={18} color="white" />
          </LinearGradient>
          <Text style={{ fontWeight: "600", marginLeft: 2 }}>{auctionInfo?.highestBid || "-"}</Text>
        </View>
      </View>

      {/* Botones*/}
      <View style={styles.containerButtons}>
        <LinearGradient
          colors={["#D13256", "#FE5F42"]}
          style={styles.editButtonacep}
        >
          <TouchableOpacity style={styles.whitebutton}>
            <Text
              style={{ color: "#E6474E", fontWeight: "600" }}
              onPress={() => setVisible(false)}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={["#D13256", "#FE5F42"]}
          style={styles.editButtonacep}
        >
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Aceptar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ModalMercado>
  );
}

const styles = StyleSheet.create({
  fondoModal: {
    width: "100%",
    height: 85,
    alignSelf: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  circuloBlanco: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: "white",
    alignSelf: "center",
    position: "absolute",
    zIndex: 1,
    marginTop: 15,
  },
  circuloDeg: {
    height: 110,
    width: 110,
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
    zIndex: 1,
    marginTop: 20,
  },
  fotocirculo: {
    resizeMode: "contain",
    height: 115,
    alignSelf: "center",
  },
  subtexto: {
    fontSize: 11,
    marginBottom: 2,
    fontWeight: "500",
    color: "#3D405B",
  },
  containerDinero: {
    flexDirection: "row",
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  money: {
    height: 25,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  oferta: {
    width: 75,
    height: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 3,
    paddingLeft: 4,
    fontWeight: "600",
  },
  moneyCoin: {
    height: 20,
    width: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  containerButtons: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 30,
    paddingTop: 20,
  },
  whitebutton: {
    height: 25,
    width: 105,
    backgroundColor: "white",
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  saldost: {
    padding: 10,
    borderRadius: 20,
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  nombreJugador: {
    alignSelf: "center",
    borderColor: "#B02419",
    fontSize: 20,
    marginTop: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoData: {
    borderWidth: 3,
    borderColor: "#B02419",
    padding: 8,
    borderRadius: 20,
    margin: 10,
    width: "100%",
  },
  editButtonacep: {
    backgroundColor: "#B02419",
    width: 110,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  imagePlayerDialog: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: "stretch",
    borderWidth: 3,
    borderColor: "#B02419",
  },
  editButtoncanc: {
    backgroundColor: "#B02419",
    width: 110,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
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
