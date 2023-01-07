import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import EmptyPlayer from "./EmptyPlayer";
import FantasyPlayer from "./FantasyPlayer";

export default function PlayerRow({
  position = "",
  players = [],
  insertPlayer,
  removePlayer,
}) {
  return (
    <View style={styles.container}>
      {players?.map((player, index) => (
        <>
          {player?.emptyPlayer ? (
            <EmptyPlayer position={position} insertPlayer={insertPlayer} />
          ) : (
            <FantasyPlayer player={player} removePlayer={removePlayer} />
          )}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
