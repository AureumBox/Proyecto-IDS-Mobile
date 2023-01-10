import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import {
  setNextIndex,
  setPrevIndex,
  setNextPage,
  setPrevPage
} from "../../state/albumSlice.js";

export default function AlbumHeader({ teamName = "", setFilter }) {
  const pages = useSelector((state) => state.album.currentTeam.pages);
  const currentPage = useSelector(
    (state) => state.album.currentTeam.currentPage
  );
  const dispatch = useDispatch();

  const navPrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPrevPage());
    } else {
      dispatch(setPrevIndex());
    }
  };
  
  const navNextPage = () => {
    if (currentPage < pages) {
      dispatch(setNextPage());
    } else {
      dispatch(setNextIndex());
    }
  };

  return (
    <View style={styles.barra}>
      <TouchableOpacity style={styles.flecha} onPress={navPrevPage}>
        <Ionicons name="chevron-back-outline" size={24} color="red" />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => {
          setFilter(true);
        }}
        style={styles.nomPais}
      >
        <Text style={styles.pais}>{teamName}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.flecha} onPress={navNextPage}>
        <Ionicons name="chevron-forward-outline" size={24} color="#E7484D" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flecha: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  barra: {
    backgroundColor: "#FAF7F7",
    width: "100%",
    height: "12%",
    resizeMode: "contain",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#CAC4D0',
    flexDirection: "row",
  },
  nomPais: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pais: {
    fontWeight: "bold",
    color: "#E7484D",
    fontSize: 25,
  },
});