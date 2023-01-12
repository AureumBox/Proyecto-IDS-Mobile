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
  setPage = 0,
}) {
  return (
    <>
      <FlatList
      removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        styles={{ width: "100%" }}
        data={auctions}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onEndReached={() => {
          if (paginate?.page < paginate?.pages) {
            setPage(paginate?.page + 1);
          }
        }}
        renderItem={({ item }) => {
          if (opciones == 1) return <PlayerCardOG auctionData={item} />;
          if (opciones == 2) return <PlayerCardMS auctionData={item} />;
          if (opciones == 3) return <PlayerCardMO auctionData={item} />;
        }}
      />
    </>
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
