import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import AddPlayerCard from "../../../components/AddPlayerCard";

export default function PlayersList({
  players = [],
  paginate = {},
  setPage = 0,
  postAuction
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
        if (paginate?.page < paginate?.pages -1) {
          setPage(paginate?.page + 1);
        }
      }}
      renderItem={({ item }) => {
        if (!item?.isInLineup) return <AddPlayerCard player={item} postAuction={postAuction}/>;
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
