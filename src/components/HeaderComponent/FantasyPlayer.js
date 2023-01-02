import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function FantasyPlayer({ player = {} }) {
  return (
    <View>
      <Image
        resizeMode="contain"
        source={{ uri: player?.img }}
        style={styles.cardImage}
      />
      <View style={styles.containerName}>
        <Text
          style={styles.playerName}
        >
          {player?.playerName}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    margin: 10,
  },
  containerName: {
    backgroundColor: "#34545D",
    borderRadius: 20,
    position: "absolute",
    top: 190,
    left: 5,
    right: 5,
    bottom: 7, 
  },
  playerName: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
});