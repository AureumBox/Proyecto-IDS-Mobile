import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import EmptyPlayer from "./EmptyPlayer";
import FantasyPlayer from "./FantasyPlayer";

export default function Foward({players = [], insertPlayer}) {
  

  return (
    <View style={styles.container}>
      {players?.map((player, index) => (
        <>
          {player?.emptyPlayer ? (
            <EmptyPlayer position={"forward"} insertPlayer={insertPlayer}/>
          ) : (
            <FantasyPlayer player={player} />
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
    backgroundColor: "#4EB43280",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
