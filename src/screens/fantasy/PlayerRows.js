import React from "react";
import { StyleSheet, View } from "react-native";

import PlayerRow from "./PlayerRow";

export default function PlayerRows({
  position = "",
  players = [],
  insertPlayer,
  removePlayer,
}) {
  return (
    <View style={styles.container}>
      {players?.map((player, index) => (
        <PlayerRow
          position={position}
          onInsert={insertPlayer}
          player={player}
          onRemove={removePlayer}
          key={index}
        ></PlayerRow>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    justifyContent: "center",
		marginBottom: 10
  },
});
