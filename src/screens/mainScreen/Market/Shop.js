import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import Container, { Toast } from "toastify-react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Entypo } from "@expo/vector-icons";

import Header from "../../../components/HeaderComponent";
import SearchBar from "../../../components/SearchBar";
import ButtonAddAuction from "./ButtonAddAuction";
import AuctionsList from "./AuctionsList";
import * as marketServices from "../../../services/market.services";
import * as albumServices from "../../../services/inventory.services";

export default function Shop({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const [opciones, setOpciones] = useState(1);

  const [loading, setLoading] = useState(1);
  const [teams, setTeams] = useState([]);
  const [paginate, setPaginate] = useState({});
  const [page, setPage] = useState(0);
  const [auctions, setAuctions] = useState([]);

  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [playerName, setPlayerName] = useState("");
  const [teamQuery, setTeamQuery] = useState("");
  const [positionQuery, setPositionQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const eventId = 1;
  const { token } = useSelector((state) => state.auth);

  //Select
  const [selected, setSelected] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const dataPosition = [
    { key: "1", value: "Seleccione una posición", disabled: true },
    { key: "2", value: "Delantero" },
    { key: "3", value: "Medio Campo" },
    { key: "4", value: "Defensa" },
    { key: "5", value: "Arquero" },
  ];

  const [selectedE, setSelectedE] = useState("");
  const [isFocusE, setIsFocusE] = useState(false);

  const loadAuctionsList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await marketServices.fetchAuctionsList(
        token,
        eventId,
        playerName,
        teamQuery,
        positionQuery,
        page
      );
      if (page != 0) {
        setAuctions((auctions) => auctions.concat(data?.items));
      } else {
        setAuctions(data?.items);
      }
      setPaginate(data?.paginate);
    } catch (error) {
      Toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [opciones, page, teamQuery, positionQuery, playerName]);
  useEffect(() => {
    loadAuctionsList();
  }, [loadAuctionsList]);

  const loadTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await albumServices.fetchTeamsInfo(token, eventId);
      let newArray = data?.items?.map((item, index) => {
        return { key: item?.id, value: item?.name };
      });
      setTeams(newArray);
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message)
    } finally {
      setLoading(false);
    }
  }, [eventId]);
  useEffect(() => {
    loadTeams();
  }, [loadTeams]);

  return (
    <View style={styles.fondo}>
      <Header />
      <Container position="top" />
      <View style={styles.container}>
        <View style={styles.fondoMercado}>
          {/* header mercado */}
          <View style={styles.rectanguloMercado}>
            <Text style={styles.title}>Mercado</Text>
            <View style={{ width: "100%", alignItems: "center" }}>
              <View style={styles.containerButtons}>
                <TouchableOpacity
                  style={opciones === 1 ? styles.buttonSelected : styles.button}
                  onPress={() => setOpciones(1)}
                >
                  <Text style={styles.textButton}>Ofertas globales</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={opciones === 2 ? styles.buttonSelected : styles.button}
                  onPress={() => setOpciones(2)}
                >
                  <Text style={styles.textButton}>Mis subastas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={opciones === 3 ? styles.buttonSelected : styles.button}
                  onPress={() => setOpciones(3)}
                >
                  <Text style={styles.textButton}>Mis ofertas</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Filtros y ayuda */}
          <View style={{ alignItems: "center", marginBottom: 5 }}>
            <View
              style={{
                flexDirection: "column",
                width: "90%",
                alignItems: "flex-end",
                marginBottom: -15,
              }}
            >
              <TouchableOpacity>
                <LinearGradient
                  colors={["#D13256", "#FE5F42"]}
                  style={{ borderRadius: 15, padding: 3 }}
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
                data={teams}
                save="value"
                placeholder={!isFocusE ? "Equipos" : "..."}
                onFocus={() => setIsFocusE(true)}
              />
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={dataPosition}
                save="value"
                placeholder={!isFocus ? "Posición" : "..."}
                onFocus={() => setIsFocus(true)}
              />
            </View>
          </View>

          {/* Lista */}
          <View style={{ paddingTop: 5, flex: 1, alignItems: "center" }}>
            {opciones == 2 && <ButtonAddAuction />}
            <AuctionsList
              auctions={auctions}
              opciones={opciones}
              paginate={paginate}
              setPage={setPage}
              nextPage={loadAuctionsList}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAEA",
    padding: 10,
    paddingTop: 16,
  },
  rectanguloMercado: {
    backgroundColor: "#D7D3DA",
    height: 100,
    width: "100%",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  fondoMercado: {
    backgroundColor: "#E2DDDD",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  fondo: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  title: {
    marginTop: 2,
    fontWeight: "bold",
    fontSize: 28,
    color: "#3D405B",
  },
  buttonSelected: {
    textAlign: "center",
    margin: "1.66%",
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#D13256",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    textAlign: "center",
    margin: "1.66%",
    padding: 8,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 18,
    color: "#3D405B",
    textAlign: "center",
  },
  containerButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
