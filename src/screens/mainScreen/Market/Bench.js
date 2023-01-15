import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import { ModalBanca } from "../../../components/ModalBanca";
import { Entypo, AntDesign } from "@expo/vector-icons";
import SearchBar from "../../../components/SearchBar";
import { SelectList } from "react-native-dropdown-select-list";
import AddPlayerCard from "../../../components/AddPlayerCard";
import PlayersList from "./PlayersList";
import AuctionsList from "./AuctionsList";
import * as fantasyServices from "../../../services/fantasy.services";
import * as albumServices from "../../../services/inventory.services";
import * as marketServices from "../../../services/market.services";
import { ActivityIndicator } from "react-native-paper";

export default function Bench({ onClick, setVisible, triggerReload }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusE, setIsFocusE] = useState(false);
  const [bench, setBench] = useState([]);
  const [teams, setTeams] = useState([]);

  const [playerNameQuery, setPlayerNameQuery] = useState("");
  const [teamQuery, setTeamQuery] = useState("");
  const [positionQuery, setPositionQuery] = useState("");
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({});

  const { token } = useSelector((state) => state.auth);
  const { currentEventId } = useSelector((state) => state.auth);

  const dataPosicion = [
    { key: "", value: "Posición" },
    { key: "forward", value: "Delantero" },
    { key: "midfielder", value: "Medio Campo" },
    { key: "defender", value: "Defensa" },
    { key: "goalkeeper", value: "Arquero" },
  ];

  const loadTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await albumServices.fetchTeamsInfo(token, currentEventId);
      let newArray = data?.items?.map((item, index) => {
        return { key: item?.name, value: item?.name };
      });
      newArray.unshift({ key: "", value: "Equipos" });
      setTeams(newArray);
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [currentEventId]);
  useEffect(() => {
    loadTeams();
  }, [loadTeams]);

  const loadBench = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fantasyServices.fetchBench(
        token,
        currentEventId,
        playerNameQuery,
        teamQuery,
        positionQuery,
        page
      );

      if (page != 0) {
        setBench((bench) => bench.concat(data?.items));
      } else {
        setBench(data?.items);
      }
      setPaginate(data?.paginate);
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [currentEventId, playerNameQuery, teamQuery, positionQuery, page]);
  useEffect(() => {
    loadBench();
  }, [loadBench]);

  const postAuction = async (
    initialValue,
    directPurchase,
    playerId,
    setLoading,
    setVisible
  ) => {
    setLoading(true);
    try {
      const data = await marketServices.postAuction(
        token,
        currentEventId,
        initialValue,
        directPurchase,
        playerId
      );
      alert(data.message);
      triggerReload();
      loadBench();
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
      setVisible(false);
    }
  };

  return (
    <View style={{ height: "90%", width: "100%", padding: 8 }}>
      <TouchableOpacity
        onPress={() => {
          setVisible(false);
        }}
      >
        <AntDesign
          name="closecircleo"
          size={20}
          color="black"
          style={{ marginLeft: "92%" }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Banca</Text>
      <View style={{ alignItems: "center", marginBottom: 5 }}>
        <View
          style={{
            width: "90%",
            alignItems: "flex-end",
            marginBottom: -15,
          }}
        >
          <TouchableOpacity>
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={{ borderRadius: 15, padding: 3, marginTop: 1 }}
            >
              <Entypo name="help" size={22} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <SearchBar
          searchPhrase={playerNameQuery}
          setSearchPhrase={setPlayerNameQuery}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <SelectList
            setSelected={(val) => {
              setTeamQuery(val);
              setPage(0);
            }}
            data={teams}
            save="key"
            placeholder={!isFocusE ? "Equipos" : "..."}
            onFocus={() => setIsFocusE(true)}
          />
          <SelectList
            setSelected={(val) => {
              setPositionQuery(val);
              setPage(0);
            }}
            data={dataPosicion}
            save="key"
            placeholder={!isFocus ? "Posición" : "..."}
            onFocus={() => setIsFocus(true)}
          />
        </View>
      </View>
      {loading && <ActivityIndicator size="small" color="#E7484D" />}
      {!loading && (
        <PlayersList
          players={bench}
          paginate={paginate}
          setPage={setPage}
          postAuction={postAuction}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  botonañadir: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textAñadir: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    textAlign: "left",
  },
  title: {
    marginTop: 2,
    fontWeight: "bold",
    fontSize: 28,
    color: "#3D405B",
  },
});
