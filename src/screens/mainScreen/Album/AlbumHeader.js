import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  setNextIndex,
  setPrevIndex
} from "../../../state/albumSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function AlbumHeader({ teamName = "" }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const navPrevPage = (input) => {
    setLoading(true);
    try {
      dispatch(setPrevIndex())
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const navNextPage = () => {
    setLoading(true);
    try {
      dispatch(setNextIndex())
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.barra}>
      <TouchableOpacity style={styles.flecha} onPress={navPrevPage}>
        <Entypo name="arrow-with-circle-left" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.nomPais}>
        <Text style={styles.pais}>{teamName}</Text>
      </View>

      <TouchableOpacity style={styles.flecha} onPress={navNextPage}>
        <Entypo name="arrow-with-circle-right" size={24} color="white" />
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
