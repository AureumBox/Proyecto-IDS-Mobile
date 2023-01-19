import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { ModalPopup } from "../../../components/ModalPopup";
import * as marketServices from "../../../services/market.services";
import { setMoney } from "../../../state/authSlice";

export default function EditBid({ auctionData = {}, setVisible, visible }) {
  const { token } = useSelector((state) => state.auth);
  const { money } = useSelector((state) => state.auth);
  const { currentEventId } = useSelector((state) => state.auth);
  const [auctionInfo, setAuctionInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [bid, setBid] = useState(0);
  const dispatch = useDispatch();

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
      dispatch(setMoney(money - bid));
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
        auctionData?.market?.id
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
    <ModalPopup visible={visible}>
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
        <Image
          source={{ uri: auctionData?.market?.sticker?.img }}
          style={styles.fotocirculo}
        />
      </LinearGradient>
			
      <Text style={styles.nombreJugador}>
        {auctionData?.market?.sticker?.playerName}
      </Text>

      <View style={{ width: "100%", height: 70, flexDirection: "row" }}>
        {/* Anterior oferta*/}
        <View
          style={{
            width: "50%",
            height: 70,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.subtexto}>Mi anterior oferta</Text>
          <View style={styles.containerDinero}>
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={styles.moneyCoin}
            >
              <MaterialIcons name="attach-money" size={18} color="white" />
            </LinearGradient>
            <Text style={{ fontWeight: "600", marginLeft: 2 }}>
              {auctionInfo?.myLastBid?.value}
            </Text>
          </View>
        </View>

        {/* Oferta actual*/}
        <View
          style={{
            width: "50%",
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
            <Text style={{ fontWeight: "600", marginLeft: 2 }}>
              {auctionInfo?.highestBid?.value}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 70,
          flexDirection: "row",
          marginTop: 16,
        }}
      >
        {/* Nueva oferta*/}
        <View
          style={{
            width: "50%",
            height: 70,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.subtexto}>Mi nueva oferta</Text>
          <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.money}>
            <TextInput
              style={styles.oferta}
              keyboardType={"numeric"}
              value={bid}
              onChangeText={(text) => setBid(text)}
            />
          </LinearGradient>
          <Text
            style={{
              fontSize: 9,
              color: "#00DB71",
              fontWeight: "700",
              marginTop: 3,
            }}
          >
            {" "}
            (+ ${auctionInfo?.highestBid?.value})
          </Text>
        </View>

        {/* Saldo restante*/}
        <View
          style={{
            width: "50%",
            height: 70,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.subtexto}>Saldo luego de la operación</Text>
          <View style={styles.containerDinero}>
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={styles.moneyCoin}
            >
              <MaterialIcons name="attach-money" size={18} color="white" />
            </LinearGradient>
            <Text style={{ fontWeight: "600", marginLeft: 2 }}>
              {money  - bid}
            </Text>
          </View>
        </View>
      </View>

      {/* Botones */}
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
              editBid(false);
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Aceptar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ModalPopup>
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
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
		borderWidth: 7,
		borderColor: 'white',
		zIndex: 999,
    marginTop: 15,
  },
  circuloDeg: {
    width: 110,
    height: 110,
    borderRadius: 60,
    alignSelf: "center",
    position: "absolute",
    marginTop: 20,
  },
  fotocirculo: {
		width: '99%',
		height: '99%',
    resizeMode: "contain",
    alignSelf: "center",
		overflow: 'hidden'
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
