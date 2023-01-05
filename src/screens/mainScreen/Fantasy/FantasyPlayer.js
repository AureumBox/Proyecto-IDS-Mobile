import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function FantasyPlayer({ player = {} }) {
  return (
    <View>
      <Text>{player.id}</Text>
      {/* <Image
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
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: '22%',
    height: '90%',
    resizeMode: 'contain'
  },
  containerName: {
    backgroundColor: "#34545D",
    borderRadius: 20,
    position: "absolute",
    top: 190,
    left: 5,
    right: 5,
    bottom: 7
  },
  playerName: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
});