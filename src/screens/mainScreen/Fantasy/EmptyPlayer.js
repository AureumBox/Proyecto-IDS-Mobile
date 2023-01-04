import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

const { width } = Dimensions.get('window');

export default function EmptyPlayer({ idCode = 0, nameCode = 0 }) {
  return (
    <View style={styles.barajita}>
      <Text style={styles.idbarajita}>Jugador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barajita: {
    width: 75,
    height: 105,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#325D6960",
    borderRadius: 10,
    margin: 3
  },
  idbarajita: {
    fontWeight: "bold",
    color: "white",
    fontSize: 13,
  },
});