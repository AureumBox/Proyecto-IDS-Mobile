import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";

export default function NoStickerSlot({ idCode = 0, nameCode = 0}) {
  console.log(idCode, nameCode);
  return (
    <View style={styles.barajita}>
      <Text style={styles.idbarajita}>{idCode}</Text>
      <Text style={styles.idbarajita}>{nameCode}</Text>
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
