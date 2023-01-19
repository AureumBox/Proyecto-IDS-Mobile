import { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { AntDesign } from "@expo/vector-icons";

import Squad from "./squad";
import PlayerRows from "./lineup/PlayerRows";
import * as fantasySlice from "../../state/fantasySlice";
import * as fantasyServices from "../../services/fantasy.services";
import Cancha from "../../../assets/app/campo.png";
import infoLineup from "../../../assets/app/helpLineup";
import HelpSlider from "../../components/helpSlider/HelpSlider";
import RankingCard from "./ranking/RankingCard";
import RankingTab from "./ranking/RankingTab";

export default function Fantasy() {
  const { token } = useSelector((state) => state.auth);
  const { currentEventId } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [squadChange, setSquadChange] = useState(false);

  const [arrayGoalkeepers, setArrayGoalkeepers] = useState([]);
  const [arrayDefenders, setArrayDefenders] = useState([]);
  const [arrayMidfielders, setArrayMidfielders] = useState([]);
  const [arrayFowarders, setArrayFowarders] = useState([]);
  const [helpLineup, setHelpLineup] = useState(false);

  const dispatch = useDispatch();
  const eventId = 1;

  const [opciones, setOpciones] = useState(1);

  const positionRanking = 4; //Colocar aquí la posición del usuario en el ranking
  const userRanking = "Cristinini"; //Colocar aquí el nombre del usuario
  const userPoints = 1500; //Colocar aquí el puntaje del usuario

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
      <Spinner
        visible={loading}
        size="large"
        color="#E7484D"
        overlayColor="#FFFFFF50"
      />
      <HelpSlider
        sliderContent={infoLineup}
        isVisible={helpLineup}
        onClose={() => {
          setHelpLineup(false);
        }}
      />
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Fantasy</Text>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={opciones === 1 ? styles.buttonSelected : styles.button}
                onPress={() => setOpciones(1)}
              >
                <Text style={styles.textButton}>Alineación</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={opciones === 2 ? styles.buttonSelected : styles.button}
                onPress={() => setOpciones(2)}
              >
                <Text style={styles.textButton}>Plantilla</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={opciones === 3 ? styles.buttonSelected : styles.button}
                onPress={() => setOpciones(3)}
              >
                <Text style={styles.textButton}>Ranking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {opciones == 1 ? (
          <>
            <View style={styles.containerScore}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.textScore}>150 PTS</Text>
                <TouchableOpacity
                  onPress={() => setHelpLineup(true)}
                  style={styles.helpButton}
                >
                  <AntDesign name="questioncircle" size={25} color="#E7484D" />
                </TouchableOpacity>
              </View>
            </View>
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
            </View>
          </>
        ) : null}

        {opciones == 2 ? (
          <>
            <Squad squadChange={squadChange} />
          </>
        ) : null}

        {opciones == 3 ? <RankingTab /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    justifyContent: "center"
  },
  container: {
    flex: 0.97,
    width: "90%",
    backgroundColor: "#E3E2E6",
    alignSelf: "center",
    justifyContent: "space-between",
		borderRadius: 10
  },
  containerHeader: {
    flex: 0.15,
    width: "100%",
    backgroundColor: "#D7D3DA",
    borderRadius: 10,
    paddingHorizontal: 10
  },
  containerButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  containerScore: {
    flex: 0.1,
    width: "100%",
    backgroundColor: "#D7D3DA",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  textScore: {
    color: "#3D405B",
    fontSize: 20,
    fontWeight: "700",
    alignSelf: "center",
  },
  helpButton: {
    position: "absolute",
    alignSelf: "flex-end",
    right: "5%",
  },
  containerCancha: {
    flex: 0.7,
    alignItems: "center",
  },
  canchaImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  contJugadoresCancha: {
    width: "92%",
    height: "100%",
    position: "absolute",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF50",
  },
  containerpuntaje: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
    color: "#3D405B",
    marginLeft: "2%",
  },
  buttonSelected: {
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 2.5,
    borderBottomColor: "#E7484D",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 8,
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#3D405B",
    textAlign: "center",
  },
  containerRanking: {
    backgroundColor: "black",
    width: "90%",
    height: 2,
    marginTop: 15,
    marginBottom: 15,
  },
  Ranking: {
    flex: 0.85,
    flexDirection: "column",
    alignItems: "center",
  },
});
