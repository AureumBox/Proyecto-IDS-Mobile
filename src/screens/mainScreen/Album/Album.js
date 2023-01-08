import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { setPercentage, setTeamList } from "../../../state/albumSlice.js";
import { fetchAlbumInfo, fetchTeamsInfo } from "../../../services/inventory.services";
import ProgressBar from "./ProgressBar";

import AlbumDigital from "../../../../assets/app/album.png";

export default function Album({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [albumInfo, setAlbumInfo] = useState({});
  const [teamsInfo, setTeamsInfo] = useState({});

  const eventId = 1;
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await loadAlbumInfo();
      await loadTeamsInfo();
    })();
  }, [token]);

  const loadAlbumInfo = async () => {
    //percentage
    setLoading(true);
    try {
      const data = await fetchAlbumInfo(token, eventId);
      setAlbumInfo(data);
      dispatch(setPercentage(data.actualProgressPercentage));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadTeamsInfo = async () => {
    //teamList
    setLoading(true);
    try {
      const data = await fetchTeamsInfo(token, eventId);
      dispatch(setTeamList(data));
      setTeamsInfo(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.fondo}>
      <Spinner visible={loading} textContent={"Cargando..."} />

      <View style={styles.container}>
        <ProgressBar />
        <TouchableOpacity style={styles.rectangulo} onPress={() => navigation.navigate('AlbumPage')}>
          <Image source={AlbumDigital} style={styles.albumdig}></Image>
        </TouchableOpacity>

          <Text style={styles.textSt}>¡Pega tus cromos!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#70ABAF",
  },
  albumdig: {
    resizeMode: "contain",
    width: "70%",
    height: '100%',
    marginLeft: 10,
  },
  rectangulo: {
    width: "80%",
    height: "55%",
    backgroundColor: "white",
    marginBottom: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  containerPor: {
    height: "8%",
    width: "100%",
    marginBottom: "4%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  texto: {
    fontWeight: "bold",
    color: "black",
    fontSize: 26,
  },
  boton: {
    width: "80%",
    height: "7%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  fondo: {
    flex: 1,
    backgroundColor: "#70ABAF",
  },
  textSt: {
    fontWeight: "bold",
    color: "#34545D",
    fontSize: 26,
  },
});
