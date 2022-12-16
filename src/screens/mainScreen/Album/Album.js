import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  AccessibilityInfo,
} from "react-native";
import Header from "../../../components/HeaderComponent";
import AlbumDigital from "../../../../assets/albumd.png";
import AlbumPage from "./AlbumPage";
import ProgressBar from "./ProgressBar";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");



import { useDispatch, useSelector } from "react-redux";
import {
  fetchAlbumInfo,
  fetchTeamsInfo,
} from "../../../services/inventory.services";
import * as albumSlice from "../../../state/albumSlice.js";
import { setPercentage, setTeamList, setCurrentTeam } from '../../../state/albumSlice.js';
import { store } from "../../../state/store";

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
    setLoading(true);
    try {
      const data = await fetchAlbumInfo(token, eventId);
      console.log(JSON.stringify(data))
      setAlbumInfo(data);
      console.log(JSON.stringify(data.actualProgressPercentage));
      dispatch(setPercentage(data.actualProgressPercentage));
    } catch (error) {
      alert("mami" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadTeamsInfo = async () => {
    setLoading(true);
    try {
      const data = await fetchTeamsInfo();
      dispatch(setTeamList(data));
      setTeamsInfo(data);
      console.log("qwertybb" + JSON.stringify(store.getState()));
      
      dispatch(setCurrentTeam({
        'index': 0,
        'id': data[0].id, 
        'name': data[0].name,
        'stickers': [],
        'obtainedCount': data[0].stickers.length,
      }))

      
      
      console.log("qwertybb" + JSON.stringify(store.getState()));

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.fondo}>
      <Header />
      <View style={styles.container}>
        <ProgressBar completedPercent={albumInfo?.actualProgressPercertage} />

        <View style={styles.rectangulo}>
          <Image source={AlbumDigital} style={styles.albumdig}></Image>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(AlbumPage)}
          style={styles.boton}
        >
          <Text style={styles.textSt}>¡Pega tus cromos!</Text>
        </TouchableOpacity>
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
    width: "100%",
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
  barraPorcentaje: {
    width: "70%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  Porcentaje: {
    width: "30%", //Para calcular el porcentaje de llenado de la barra
    height: "100%",
    backgroundColor: "#63130B",
    borderRadius: 10,
    flexDirection: "row",
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
