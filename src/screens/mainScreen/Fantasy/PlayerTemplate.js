import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

export default function PlayerTemplate({ player = {} }) {
  return ( 
    <View styles={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          source={{ uri: player?.img }}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.playerName}>{player?.playerName}</Text>
        <View styles={{ backgroundColor: "red" }}>
          <Text style={styles.playerName}>{player?.position}</Text>
        </View>
        <Text style={styles.playerName}>{ player?.isInLineup ? "Alineado" : "No alineado" }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    margin: 10,
  },
  container: {
    backgroundColor: "#66959A",
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
