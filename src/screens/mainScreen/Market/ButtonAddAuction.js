import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function ButtonAddAuction({onClick}) {
  return (
    <View style={styles.shadow}>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <LinearGradient
          style={styles.botonañadir}
          colors={["#D13256", "#FE5F42"]}
        >
          <Text style={styles.textAñadir}>
            + Añade tus jugadores al mercado
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  botonañadir: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textAñadir: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    textAlign: "left",
  },
});
