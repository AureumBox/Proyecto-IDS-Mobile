import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { ModalBanca } from "../../../components/ModalBanca";
import { useState } from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import SearchBar from "../../../components/SearchBar";
import { SelectList } from "react-native-dropdown-select-list";
import AddPlayerCard from "../../../components/AddPlayerCard";
import PlayersList from "./PlayersList";
import AuctionsList from "./AuctionsList";

export default function Bench({ onClick, setVisible }) {

  const [selected, setSelected] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [selectedE, setSelectedE] = useState("");
  const [isFocusE, setIsFocusE] = useState(false);

  const dataEquipos = [
    { key: "2", value: "España" },
    { key: "3", value: "Argentina" },
    { key: "4", value: "Alemania" },
    { key: "5", value: "Brazil" },
  ];

  const data = [
    { key: "2", value: "Delantero" },
    { key: "3", value: "Medio Campo" },
    { key: "4", value: "Defensa" },
    { key: "5", value: "Arquero" },
  ];

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
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <SelectList
            setSelected={(val) => setSelectedE(val)}
            data={dataEquipos}
            save="value"
            placeholder={!isFocusE ? "Equipos" : "..."}
            onFocus={() => setIsFocusE(true)}
          />
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            placeholder={!isFocus ? "Posición" : "..."}
            onFocus={() => setIsFocus(true)}
          />
        </View>
      </View>
      <PlayersList players={data} paginate={{}} setPage={{}}/>
     
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
