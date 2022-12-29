import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native-paper";
import { Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Spinner from "react-native-loading-spinner-overlay";

import Header from "../../../components/HeaderComponent";
import PlayerTemplate from "../../../components/PlayerTemplate";
import { fetchBench } from "../../../services/fantasy.services";
import { fetchTeamsInfo } from "../../../services/inventory.services";

const { height, width } = Dimensions.get("window");

{
  /* <View>
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
    <Picker.Item label="Arquero" value="Arquero" />
    <Picker.Item label="Defensa" value="Defensa" />
    <Picker.Item label="Delantero" value="Delantero" />
    <Picker.Item label="MedioCentro" value="MedioCentro" />
  </Picker>

  <Picker
    style={styles.picker}
    selectedValue={team}
    onValueChange={(itemValue, itemIndex) => setTeam(itemValue)}
  >
    <Picker.Item label="Equipo" value="" />
    {teamsList?.map((team, index) => (
      <Picker.Item label={team?.name} value={team?.name} />
    ))}
  </Picker>
</View>; */
}

export default function Inventorytest({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [teamsList, setTeamsList] = useState();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [paginate, setPaginate] = useState({});
  const [squad, setSquad] = useState([]);

  const [playerName, setPlayerName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");

  const dispatch = useDispatch();
  const eventId = 1;

  const stickers = ["papa", "arepa", "zanahoria"];

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    loadTeams();
  }, [loadTeams]);

  useEffect(() => {
    loadBench();
  }, [loadBench, playerName, team, position]);

  useEffect(() => {
    loadNextPageTeams();
  }, [page]);

  const loadNextPageTeams = useCallback(async () => {
    console.log("qwertyuioppppppppppppppppppppp")
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
      console.log(JSON.stringify(data));
      setSquad((squad) => squad.concat(data.items));
      console.log(JSON.stringify(squad));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  const loadBench = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchBench(token, eventId, playerName, team, position);
      setSquad(data.items);
      setPaginate(data.paginate);
      console.log(JSON.stringify(squad));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [token, eventId, playerName, team, position]);

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

  return (
    <View>
      {/* Filtros */}

      {/* Jugadores fantasy */}
      <View style={{ backgroundColor: "#FFFFFF", margin: 10 }}>
        <FlatList
          data={squad}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={<Text>n</Text>}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onEndReached={() => {
            if (page < paginate?.pages) setPage(page + 1);
          }}
          renderItem={({ item }) => {
            console.log("aaaaaaaaaaaeeeeeeeeeeeeeeeeeee")
            return (
              <TouchableOpacity >
                <PlayerTemplate player={item} />
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
  },
  textSt: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 30,
    lineHeight: 60,
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
});
