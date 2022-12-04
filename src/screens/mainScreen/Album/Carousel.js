import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

const { width, height } = Dimensions.get("screen");
const data = [
  {
    id: 1,
    img: "https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000",
  },
  {
    id: 2,
    img: "https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000",
  },
  {
    id: 3,
    img: "https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudioblanco_155003-13189.jpg?w=2000",
  },
  {
    id: 4,
    img: "https://okdiario.com/img/2022/05/12/gato-655x368.jpg",
  },
];

export default function Carousel() {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, selectedId }) => (
    <TouchableOpacity onPress={() => setSelectedId(item.id)}>
      <View
        style={{
          width: 150,
          height: "95%",
        }}
      >
        <Image
          source={{ uri: item.img }}
          style={{
            flex: 1,
            resizeMode: "contain",
          }}
        />
        {/* Overlay rojo cuando item es seleccionado */}
        {item.id === selectedId && <View style={styles.selectedItem} />}
      </View>
    </TouchableOpacity>
  );

  const noStickers = () => (
    <View style={{ justifyContent: "center" }}>
      <Text style={{ color: "gray" }}>
        No hay cromos disponibles para pegar
      </Text>
    </View>
  );

  return (
    <View style={styles.carousel}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          ListEmptyComponent={noStickers}
          ListFooterComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => <View style={styles.separator} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          extraData={selectedId}
          renderItem={({ item }) => {
            return (
              <View style={{ justifyContent: "center" }}>
                <Item item={item} selectedId={selectedId} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "90%",
    height: "25%",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    overflow: "hidden",
  },
  selectedItem: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(194, 0, 0, 0.39)",
    borderColor: "#C10001",
    borderWidth: 3,
  },
  separator: {
    width: 20,
  },
});
