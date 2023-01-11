import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import PlayerCardOG from "../../../components/PlayerCardOG";
import PlayerCardMS from "../../../components/PlayerCardMS";
import PlayerCardMO from "../../../components/PlayerCardMO";
import AddPlayerCard from "../../../components/AddPlayerCard";

export default function PlayersList({
  players = [],
  opciones = 1,
  paginate = {},
  setPage = 0,
}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      styles={{ width: "100%" }}
      data={players}
      keyExtractor={(_, index) => index.toString()}
      ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={() => {
        if (paginate?.page < paginate?.pages) {
          setPage(paginate?.page + 1);
        }
      }}
      renderItem={({ item }) => {
        console.log(JSON.stringify(item))
        return <AddPlayerCard player={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textAñadir: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    textAlign: "left",
  },
});
