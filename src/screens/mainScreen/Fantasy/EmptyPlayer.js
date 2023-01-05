import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width } = Dimensions.get('window');

export default function EmptyPlayer({ idCode = 0, nameCode = 0, position}) {
  return (
    <TouchableOpacity style={styles.barajita}>
      <Text style={styles.idbarajita}>{position}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  barajita: {
    width: '22%',
    height: '90%',
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