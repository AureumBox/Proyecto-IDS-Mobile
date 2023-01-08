import { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/HeaderComponent";
import FantasyDrawer from "./FantasyDrawer";
import Cancha from "../../../../assets/cancha.jpg";
import { IconButton, MD3Colors } from "react-native-paper";
import * as fantasyServices from "../../../services/fantasy.services";
import * as fantasySlice from "../../../state/fantasySlice";
import PlayerRows from "./PlayerRows";
import Spinner from "react-native-loading-spinner-overlay";

export default function Fantasy({ navigation }) {
  const { height } = Dimensions.get("window");
  const { token } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [squadChange, setSquadChange] = useState(false);
  const [arrayMidfielders, setArrayMidfielders] = useState([]);
  const [arrayDefenders, setArrayDefenders] = useState([]);
  const [arrayFowarders, setArrayFowarders] = useState([]);
  const [arrayGoalkeepers, setArrayGoalkeepers] = useState([]);
  const dispatch = useDispatch();
  const eventId = 1;

  function createArray(players, MAX_PLAYERS) {
    let finalArray = [];
    for (let index = players.length; index < MAX_PLAYERS; index++) {
      finalArray.push({ emptyPlayer: true });
    }
    finalArray = finalArray.concat(players);
    return finalArray;
  }

  const loadSquad = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fantasyServices.fetchSquad(token, eventId);
      setArrayGoalkeepers(
        createArray(
          data.filter((player) => player?.position == "goalkeeper"),
          1
        )
      );

      setArrayMidfielders(
        createArray(
          data.filter((player) => player?.position == "midfielder"),
          3
        )
      );

      setArrayDefenders(
        createArray(
          data.filter((player) => player?.position == "defender"),
          4
        )
      );

      setArrayFowarders(
        createArray(
          data.filter((player) => player?.position == "forward"),
          3
        )
      );
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [token]);
  useEffect(() => {
    loadSquad();
  }, [loadSquad]);

  const removePlayer = async (token, eventId, player) => {
    setLoading(true);
    try {
      const data = await fantasyServices.removePlayer(
        token,
        eventId,
        player?.id
      );
      dispatch(fantasySlice.setSelectedPlayer({}));
      loadSquad();
      setSquadChange(!squadChange);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const insertPlayer = async (token, eventId, selectedPlayer) => {
    setLoading(true);
    try {
      const data = await fantasyServices.insertPlayer(
        token,
        eventId,
        selectedPlayer
      );
      dispatch(fantasySlice.setSelectedPlayer({}));
      loadSquad();
      setSquadChange(!squadChange);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.fondo}>
      <Header />

      <Spinner visible={loading} textContent={"Cargando..."} />

      <View style={styles.container}>
        {/* Drawer */}
        <View
          style={{
            ...styles.drawer,
            overflow: "hidden",
            width: open ? "100%" : 0,
            height: open ? "100%" : 0,
          }}
        >
          <IconButton
            icon="close"
            iconColor="white"
            size={20}
            onPress={() => setOpen(false)}
          />
          <FantasyDrawer squadChange={squadChange}/>
        </View>

        {/* Titulo */}
        <View style={styles.containerTitulo}>
          <View style={styles.containerPuntaje}>
            <Text style={styles.textSt}>FANTASY</Text>
          </View>
          <View style={styles.containerPuntaje}>
            <TouchableOpacity>
              <Text style={[styles.textBoton, styles.textBotonSelected]}>
                Equipo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.textBoton]}>Ranking</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cancha */}
        <View style={styles.containerCancha}>
          <Image source={Cancha} style={styles.canchaImg} />
          <View style={styles.contJugadoresCancha}>
            <PlayerRows
              position={"goalkeeper"}
              players={arrayGoalkeepers}
              insertPlayer={insertPlayer}
              removePlayer={removePlayer}
            />
            <PlayerRows
              position={"defender"}
              players={arrayDefenders}
              insertPlayer={insertPlayer}
              removePlayer={removePlayer}
            />
            <PlayerRows
              position={"midfielder"}
              players={arrayMidfielders}
              insertPlayer={insertPlayer}
              removePlayer={removePlayer}
            />
            <PlayerRows
              position={"forward"}
              players={arrayFowarders}
              insertPlayer={insertPlayer}
              removePlayer={removePlayer}
            />
          </View>

          {/*  */}
        </View>
        <View style={styles.carruselContainer}>
          <View style={styles.cont}>
            <Text style={styles.texto}>¡Arma tu equipo!</Text>
            <Text style={styles.bancas}>Almacen</Text>
            <IconButton
              style={styles.opciones}
              icon="dots-horizontal"
              size={20}
              onPress={() => setOpen(true)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#325D69",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  containerTitulo: {
    backgroundColor: "#294851",
    borderBottomColor: "#294148",
    borderBottomWidth: 8,
  },
  containerPuntaje: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textSt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
  textBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    paddingHorizontal: "10%",
  },
  textBotonSelected: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomColor: "#63130B",
    borderBottomWidth: 8,
  },
  containerCancha: {
    width: "90%",
    height: "75%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A434A",
    marginVertical: 15,
  },
  contJugadoresCancha: {
    width: "86%",
    height: "95%",
    position: "absolute",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff50",
  },
  canchaImg: {
    height: "95%",
    resizeMode: "contain",
  },
  inputStyle: {
    backgroundColor: "#F2F6FE",
    margin: 10,
  },
  drawer: {
    position: "absolute",
    zIndex: 999,
    height: "80%",
    backgroundColor: "#34545d",
    right: 0,
  },
  bancaImg: {
    width: 100,
    height: 130,
    marginLeft: 2.5,
    marginRight: 2.5,
  },
  cont: {
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  opciones: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    right: 0,
  },
  bancas: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  puntajeBoton: {
    width: 90,
    height: 20,
    backgroundColor: "#B02419",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  containerpuntaje: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  imCancha: {
    height: "62%",
    justifyContent: "space-evenly",
    resizeMode: "contain",
  },
  carruselContainer: {
    width: "90%",
    height: "30%",
  },
  carrusel: {
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 3,
    paddingTop: 5,
  },
});
