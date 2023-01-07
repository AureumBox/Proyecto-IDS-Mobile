import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

export default function FantasyPlayer({ player = {},  removePlayer}) {

  const { token } = useSelector((state) => state.auth);
  // const { eventId } = useSelector((state) => state.auth);
  const eventId = 1;

  const handlePress = () => {
    try {
      console.log(player?.position)
      removePlayer(token, eventId, player);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
      <TouchableOpacity style={styles.barajita} onPress={handlePress}>
        <Text style={styles.idbarajita}>{player?.id}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  barajita: {
    width: "22%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#325D6960",
    borderRadius: 10,
    margin: 3,
  },
  idbarajita: {
    fontWeight: "bold",
    color: "white",
    fontSize: 13,
  },
});