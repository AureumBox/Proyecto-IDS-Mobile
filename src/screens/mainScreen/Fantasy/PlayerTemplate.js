import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PlayerTemplate({ player = {} }) {
  return (
    <View styles={styles.container}>
      <View>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://i.ebayimg.com/images/g/ptUAAOSwk8JdyYff/s-l1600.jpg'}}
          // source={{ uri: player?.img }}
          style={styles.cardImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.playerName}>Domo</Text>
        {/* <Text style={styles.playerName}>{player?.playerName}</Text> */}
        <View styles={{backgroundColor: "red"}}>

        <Text style={styles.playerName}>MedioCentro</Text>
        {/* <Text style={styles.playerName}>{player?.position}</Text> */}
        </View>
        <Text style={styles.playerName}>En alineacion</Text>
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
