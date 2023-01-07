import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import EmptyPlayer from "./EmptyPlayer";
import FantasyPlayer from "./FantasyPlayer";

export default function Defender(players = []) {
  return (
    <TouchableOpacity style={styles.container}>
      {players?.players?.map((player, index) => (
        <>
          {player?.emptyPlayer ? (
            <EmptyPlayer position={"Defensa"} />
          ) : (
            <FantasyPlayer player={player} />
          )}
        </>
      ))}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    backgroundColor: "#D2252B80",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});