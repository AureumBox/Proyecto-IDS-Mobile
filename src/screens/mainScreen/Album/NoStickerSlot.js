import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";

export default function NoStickerSlot({ idCode, nameCode }) {
  console.log(idCode, nameCode);
  return (
    <View style={styles.barajita}>
      <Text style={styles.idbarajita}>id_1</Text>
      <Text style={styles.idbarajita}>nameid_1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barajita: {
    backgroundColor: "#BBB9B9",
    width: "25%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  idbarajita: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
});
