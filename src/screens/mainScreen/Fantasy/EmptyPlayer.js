import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
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
    backgroundColor: "#BBB9B9",
    width: width / 3.5,
    height: (width / 3.5) * 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  idbarajita: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
});