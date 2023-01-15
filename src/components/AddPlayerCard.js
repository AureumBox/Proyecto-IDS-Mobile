import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import CreateAuction from "../screens/mainScreen/Market/CreateAuction";

const { height, width } = Dimensions.get("window");
export default function AddPlayerCard({ player = {}, postAuction }) {
  //Visible Modal Ofertas Globales - Ofertar
  const [visible, setVisible] = useState(false);

  const positionSpa = {
    goalkeeper: "Arquero",
    defender: "Defensa",
    midfielder: "Medio Campo",
    forward: "Delantero",
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <View style={styles.card}>
          <LinearGradient
            colors={["#D13256", "#FE5F42"]}
            style={styles.cardImage}
          >
            <ImageBackground
              resizeMode="contain"
              source={{ uri: player?.img }}
              style={styles.cardImage}
            >
              <Image
                resizeMode="contain"
                source={{ uri: player?.team?.badge }}
                style={styles.badgeImage}
              />
              <Text style={[styles.playerName, styles.specialText]}>
                {player?.playerName}
              </Text>
            </ImageBackground>
          </LinearGradient>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: 100,
                margin: 3,
              }}
            >
              <Image
                style={{ height: 20, width: 20, marginLeft: -45 }}
                source={{ uri: player?.team?.badge }}
              />
              <LinearGradient
                colors={["#D13256", "#FE5F42"]}
                style={{ borderRadius: 10, marginLeft: 25 }}
              >
                <Text style={styles.posiciontext}>
                  {positionSpa[player?.position]}
                </Text>
              </LinearGradient>
            </View>

            <View
              style={{ flexDirection: "row", marginTop: 15, marginLeft: 110 }}
            >
              <Text
                style={{ fontSize: 18, color: "#77798C", fontWeight: "600" }}
              >
                PTS{" "}
              </Text>
              <Text
                style={{ fontSize: 28, color: "#3D405B", fontWeight: "800" }}
              >
                49
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal Compra directa*/}

      {visible && (
        <CreateAuction
          player={player}
          visible={visible}
          setVisible={setVisible}
          postAuction={postAuction}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  posiciontext: {
    paddingLeft: 3,
    paddingRight: 3,
    fontSize: 10,
    lineHeight: 25,
    color: "white",
    fontWeight: "500",
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
  cardImage: {
    width: width * 0.25,
    height: height * 0.15,
    left: width * 0.01,
    borderColor: "blue",
    borderRadius: 10,
    zIndex: 1,
    overflow: "hidden",
  },
  badgeImage: {
    width: width * 0.05,
    height: width * 0.05,
    left: width * 0.25 - width * 0.075,
    top: width * 0.015,
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 25,
    zIndex: 1,
  },
  playerName: {
    fontWeight: "400",
    fontSize: 15,
    color: "#000000",
  },
  specialText: {
    fontSize: 12,
    color: "#FFFFFF",
    transform: [{ rotate: "-90deg" }],
    textAlign: "center",
    right: width * 0.11,
    top: height * 0.04,
    fontWeight: "bold",
  },
});
