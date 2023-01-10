import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import MoneyIcon from "../../assets/app/moneyIcon.png";

const convertTime = (finishDate) => {
  const actual = new Date(Date.now());
  const end = new Date(Date.parse(finishDate));

  let minutes = Math.floor((end - actual) / 60000);
  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return hours + "h " + minutes + "m";
};

export default function PlayerCardOG({ auctionData = {} }) {
  const positionSpa = {
    goalkeeper: "Arquero",
    defender: "Defensa",
    midfielder: "Mediocam",
    forward: "Delantero",
  };

  return (
    <View style={styles.card}>
      <LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.imgCard}>
        {/* Img jugador */}
        <View style={styles.containerPlayerName}>
          <Text style={styles.playerName}>
            {auctionData?.sticker?.playerName}
          </Text>
        </View>
        <View>
          <Image
            style={styles.imagePlayer}
            source={{ uri: auctionData?.sticker?.img }}
          />
        </View>
      </LinearGradient>

      {/* card body */}
      <View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", margin: 3 }}
        >
          <Image
            style={{ height: 20, width: 20, marginLeft: -45 }}
            source={{ uri: auctionData?.sticker?.team?.badge }}
          />
          <LinearGradient
            colors={["#D13256", "#FE5F42"]}
            style={{ borderRadius: 10, marginLeft: 25 }}
          >
            <Text style={styles.posiciontext}>
              {positionSpa[auctionData?.sticker?.position]}
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
            {auctionData?.highestBid?.value ||
              auctionData?.initialPurchaseValue}
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 3 }}>
          <Ionicons name={"time-outline"} color={"black"} size={22} />
          <Text style={styles.textCard}>
            {convertTime(auctionData?.finishDate)}
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

        {/* buttons */}
        <TouchableOpacity>
          <LinearGradient
            style={styles.editButton}
            colors={["#D13256", "#FE5F42"]}
          >
            <Text style={styles.textbotones}>Ofertar</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            style={styles.editButton}
            colors={["#D13256", "#FE5F42"]}
          >
            <Text style={styles.textbotones}>Compra directa</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
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
