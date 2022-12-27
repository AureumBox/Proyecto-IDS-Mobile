import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  setNextIndex,
  setPrevIndex,
  setNextPage,
  setPrevPage,
} from "../../../state/albumSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function AlbumHeader({ teamName = "" }) {
  const pages = useSelector((state) => state.album.currentTeam.pages);
  const currentPage = useSelector(
    (state) => state.album.currentTeam.currentPage
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  /* const navPrevPage = (input) => {
    setLoading(true);
    try {
      dispatch(setPrevIndex())
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }; */

  const navPrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPrevPage());
    } else {
      dispatch(setPrevIndex());
    }
  };

  const navNextPage = () => {
    if (currentPage < pages) {
      console.log('page aaa')
      dispatch(setNextPage());
    } else {
      console.log('index aaa')
      dispatch(setNextIndex());
    }
  };

  /* const navNextPage = () => {
    setLoading(true);
    try {
      dispatch(setNextIndex())
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }; */

  return (
    <View style={styles.barra}>
      <TouchableOpacity style={styles.flecha} onPress={navPrevPage}>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.nomPais}>
        <Text style={styles.pais}>{teamName}</Text>
      </View>

      <TouchableOpacity style={styles.flecha} onPress={navNextPage}>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
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
    backgroundColor: "#2A555E",
    width: "100%",
    height: "12%",
    resizeMode: "contain",
    borderRadius: 2,
    flexDirection: "row",
  },
  nomPais: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pais: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
});