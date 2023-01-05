import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import EmptyPlayer from "./EmptyPlayer";
import FantasyPlayer from "./FantasyPlayer";

export default function Foward(players = []) {
  return (
    <TouchableOpacity style={styles.container}>
      {players?.players?.map((player, index) => (
        <View key={player.id} >
          {player?.emptyPlayer ? (
            <EmptyPlayer position={"Delantero"} />
          ) : (
            <FantasyPlayer player={player} />
          )}
        </View>
      ))}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    backgroundColor: "#4EB43280",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
