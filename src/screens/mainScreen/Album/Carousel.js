import * as React from "react";
import {
  FlatList,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarousel } from "../../../services/inventory.services";
import { setIdStickerSelected } from "../../../state/albumSlice.js";

import StickerTemplate from "../../../components/StickerTemplate";

const { width, height } = Dimensions.get("screen");

export default function Carousel() {
  const [selectedId, setSelectedId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [stickers, setStickers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [eventId, setEventId] = useState(1);

  const { token } = useSelector((state) => state.auth);
  const pageInfo = useSelector((state) => state.album.currentTeam.stickers);
  dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await loadCarouselInfo();
    })();
  }, [token, pageInfo]);

  function selectSticker(id) {
    setSelectedId(id)
    dispatch(setIdStickerSelected(id))
  }

  const loadCarouselInfo = async () => {
    setLoading(true);
    try {
      const data = await fetchCarousel(token, eventId);
      setStickers(data.items);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const Item = ({ item, selectedId }) => (
    <TouchableOpacity onPress={() => selectSticker(item.id)}>
      <View
        style={{
          width: 150,
          height: "95%",
        }}
      >
        <StickerTemplate sticker={item} />

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
          data={stickers}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          ListEmptyComponent={noStickers}
          ListFooterComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => <View style={styles.separator} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          extraData={selectedId}
          renderItem={({ item }) => {
            return (
              <View style={{ justifyContent: "center" }}>
                <Item item={item.sticker} selectedId={selectedId} />
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
    backgroundColor: "red",
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
