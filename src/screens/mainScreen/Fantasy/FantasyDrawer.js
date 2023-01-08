import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Spinner from "react-native-loading-spinner-overlay";

import PlayerTemplate from "./PlayerTemplate";
import { fetchBench } from "../../../services/fantasy.services";
import { fetchTeamsInfo } from "../../../services/inventory.services";
import * as fantasySlice from "../../../state/fantasySlice";

const { height, width } = Dimensions.get("window");

export default function Inventorytest({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [paginate, setPaginate] = useState({});
  const [teamsList, setTeamsList] = useState();
  const [bench, setBench] = useState([]);

  const [playerName, setPlayerName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");

  const dispatch = useDispatch();
  const eventId = 1;

  const { token } = useSelector((state) => state.auth);
  const { selectedPlayer } = useSelector((state) => state.fantasy);

  const selectPlayer = (item) => {
    if (item == selectedPlayer) {
      dispatch(fantasySlice.setSelectedPlayer({}));
      return;
    }
    dispatch(fantasySlice.setSelectedPlayer(item));
  };

  const loadNextPageBench = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchBench(
        token,
        eventId,
        playerName,
        team,
        position,
        page
      );
      setBench((bench) => bench.concat(data.items));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [page]);
  useEffect(() => {
    loadNextPageBench();
  }, [loadNextPageBench]);

  const loadBench = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchBench(token, eventId, playerName, team, position);
      setBench(data.items);
      setPaginate(data.paginate);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [eventId, playerName, team, position]);
  useEffect(() => {
    loadBench();
  }, [loadBench]);

  const loadTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchTeamsInfo(token, eventId);
      setTeamsList(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [eventId]);
  useEffect(() => {
    loadTeams();
  }, [loadTeams]);

  return (
    <View>
      {/* Filtros */}
      <View style={styles.filterContainer}>
        <Text style={styles.textSt}>Almacen de jugadores</Text>
        <TextInput
          placeholder="Buscar jugador"
          value={playerName}
          onChangeText={(playerName) => setPlayerName(playerName)}
          left={<TextInput.Icon icon="magnify" />}
          style={styles.imputStyle}
          theme={{ roundness: 50 }}
          underlineStyle={{ display: "none" }}
        />

        <Picker
          style={styles.picker}
          selectedValue={position}
          onValueChange={(itemValue, itemIndex) => setPosition(itemValue)}
        >
          <Picker.Item label="Posicion" value="" />
          <Picker.Item label="Arquero" value="goalkeeper" />
          <Picker.Item label="Defensa" value="defender" />
          <Picker.Item label="Delantero" value="forward" />
          <Picker.Item label="MedioCentro" value="midfielder" />
        </Picker>

        <Picker
          style={styles.picker}
          selectedValue={team}
          onValueChange={(itemValue, itemIndex) => setTeam(itemValue)}
        >
          <Picker.Item label="Equipo" value="" />
          {teamsList?.map((team, index) => (
            <Picker.Item label={team?.name} value={team?.name} key={index}/>
          ))}
        </Picker>
      </View>

      {/* Jugadores fantasy */}
      <View style={{ margin: 10 }}>
      <Spinner visible={loading} textContent={"Cargando..."} />
        <FlatList
          data={bench}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReached={() => {
            if (page < paginate?.pages) setPage(page + 1);
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  selectPlayer(item);
                }}
              >
                <View styles={{ backgroundColor: "red" }}>
                  <PlayerTemplate player={item} key={item.id}/>
                  {item.id === selectedPlayer.id && (
                    <View style={styles.selectedItem} />
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#70ABAF",
  },
  picker: {
    backgroundColor: "#34545d",
    color: "#FFFFFF",
    marginHorizontal: 50,
    marginVertical: 5,
    borderRadius: 20,
  },
  checkContainer: {
    position: "absolute",
    right: 0,
    margin: 10,
  },
  cardHeader: {
    backgroundColor: "#34545d",
    padding: 10,
    flexDirection: "row",
    position: "relative",
  },
  cardTitle: {
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: (width - 20 * 3) / 2,
    margin: 10,
    backgroundColor: "#fff",
  },
  imputStyle: {
    backgroundColor: "#F2F6FE",
    borderRadius: 50,
    marginHorizontal: 15,
  },
  textSt: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 30,
    lineHeight: 50,
    color: "#FFFFFF",
    marginRight: 10,
    textAlign: "center",
  },
  textSub: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
  separator: {
    width: 20,
  },
  filterContainer: {
    backgroundColor: "#325D69",
    margin: 15,
    borderRadius: 10,
  },
  selectedItem: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(194, 0, 0, 0.39)",
    borderColor: "#C10001",
    borderWidth: 3,
  },
});
