import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function AlbumHeader({ teamName = "" }) {
  return (
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
  );
}

const styles = StyleSheet.create({
  flecha: {
    flex: 3,
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
  nomPais: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pais: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
});
