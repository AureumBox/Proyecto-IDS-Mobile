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
  setPercentage,
  setTeamList,
  setCurrentTeam,
  setNextIndex,
  setPrevIndex
} from "../../../state/albumSlice.js";
import { useDispatch, useSelector } from "react-redux";

export default function AlbumHeader({ teamName = "" }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const teamList = useSelector((state) => state.album.teamList);
  const index = useSelector((state) => state.album.currentTeam.index);

  const dispatch = useDispatch();


  const navPrevPage = (input) => {
    console.log("right");
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
    console.log("right");
    setLoading(true);
    try {
      dispatch(setNextIndex())
    } catch (error) {
      alert('heaeder'+error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.barra}>
      {console.log('indice '+index)}
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
