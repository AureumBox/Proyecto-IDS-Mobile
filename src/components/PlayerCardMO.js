import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";

import MoneyIcon from "../../assets/app/moneyIcon.png";
import { ModalMercado } from "./ModalMercado";
import EditBid from "../screens/mainScreen/Market/EditBid";
import DirectBuy from "../screens/mainScreen/Market/DirectBuy";

export default function PlayerCardMO({ auctionData = {} }) {
  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const [visibleBuy, setVisibleBuy] = React.useState(false);

  const positionSpa = {
    goalkeeper: "Arquero",
    defender: "Defensa",
    midfielder: "Medioc",
    forward: "Delantero",
  };

  const convertTime = (finishDate) => {
    const actual = new Date(Date.now());
    const end = new Date(Date.parse(finishDate));

    let minutes = Math.floor((end - actual) / 60000);
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    return hours + "h " + minutes + "m";
  };

  return (
    <>
      <View style={styles.card}>
        <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.imgCard}>
          <View style={styles.containerPlayerName}>
            <Text style={styles.playerName}>
              {auctionData?.market?.sticker?.playerName}
            </Text>
          </View>
          <View>
            <Image
              style={styles.imagePlayer}
              source={{ uri: auctionData?.market?.sticker?.img }}
            />
          </View>
        </LinearGradient>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: 3,
            }}
          >
            <Image
              style={{ height: 20, width: 20, marginLeft: -45 }}
              source={{ uri: auctionData?.market?.sticker?.team?.badge }}
            />
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={{ borderRadius: 10, marginLeft: 25 }}
            >
              <Text style={styles.posiciontext}>
                {positionSpa[auctionData?.market?.sticker?.position]}
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: 3,
              paddingTop: 5,
            }}
          >
            <Image
              style={{ height: 22, width: 22, marginRight: 3, marginLeft: 3 }}
              source={MoneyIcon}
            />
            <Text style={styles.textCard}>
              {auctionData?.market?.initialPurchaseValue}
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 3 }}>
            <Ionicons name={"time-outline"} color={"black"} size={22} />
            <Text style={styles.textCard}>
              {convertTime(auctionData?.market?.finishDate)}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 10,
            width: 110,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setVisibleEdit(true)}>
            <LinearGradient
              style={styles.editButton}
              colors={["#D13256", "#FE5F42"]}
            >
              <Text style={styles.textbotones}>Editar</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setVisibleBuy(true)}>
            <LinearGradient
              style={styles.editButton}
              colors={["#D13256", "#FE5F42"]}
            >
              <Text style={styles.textbotones}>Compra directa</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {visibleEdit && (
        <EditBid
          setVisible={setVisibleEdit}
          visible={visibleEdit}
          auctionData={auctionData}
        />
      )}

      {visibleBuy && (
        <DirectBuy
          setVisible={setVisibleBuy}
          visible={visibleBuy}
          auctionData={auctionData}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
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
