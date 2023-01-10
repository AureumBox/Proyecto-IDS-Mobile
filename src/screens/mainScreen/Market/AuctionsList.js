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

export default function AuctionsList({
  auctions = [],
  opciones = 1,
  paginate = {},
  setPage,
  nextPage,
}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      styles={{ width: "100%" }}
      data={auctions}
      keyExtractor={(_, index) => index.toString()}
      ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={() => {
        if (paginate?.page < paginate?.pages) {
          console.log("avanzamos");
          setPage(paginate?.page + 1);
          nextPage;
        }
      }}
      renderItem={({ item }) => {
        if (opciones == 1) return <PlayerCardOG auctionData={item} />;
        if (opciones == 2) return <PlayerCardMS auctionData={item} />;
        if (opciones == 3) return <PlayerCardMO auctionData={item} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  botonañadir: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textAñadir: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    textAlign: "left",
  },
});
