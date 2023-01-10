import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/HeaderComponent";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Container, { Toast } from 'toastify-react-native';

import { SelectList } from "react-native-dropdown-select-list";
import { Entypo } from "@expo/vector-icons";
import * as marketServices from "../../../services/market.services";
import * as albumServices from "../../../services/inventory.services";

import SearchBar from "../../../components/SearchBar";
import PlayerCardOG from "../../../components/PlayerCardOG";
import PlayerCardMS from "../../../components/PlayerCardMS";
import PlayerCardMO from "../../../components/PlayerCardMO";

import JugadorBra from "../../../../assets/app/bra_10.png";
import MoneyIcon from "../../../../assets/app/moneyIcon.png";
import Reloj from "../../../../assets/app/reloj.png";
import Bra from "../../../../assets/app/bra.png";

export default function Shop({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const [visible, setVisible] = React.useState(false);
  const hideDialog = () => setVisible(false);
  const [opciones, setOpciones] = useState(1);
  const [teams, setTeams] = useState(1);
  const [loading, setLoading] = useState(1);
  const [auctions, setAuctions] = useState([]);
  const eventId = 1;

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const [searchPhrase, setSearchPhrase] = useState("");
  const { token } = useSelector((state) => state.auth);

  //Select
  const [selected, setSelected] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { key: "1", value: "Seleccione una posición", disabled: true },
    { key: "2", value: "Delantero" },
    { key: "3", value: "Medio Campo" },
    { key: "4", value: "Defensa" },
    { key: "5", value: "Arquero" },
  ];

  const [selectedE, setSelectedE] = useState("");
  const [isFocusE, setIsFocusE] = useState(false);

  const dataEquipos = [
    { key: "1", value: "Seleccione un equipo", disabled: true },
    { key: "2", value: "España" },
    { key: "3", value: "Argentina" },
    { key: "4", value: "Alemania" },
    { key: "5", value: "Brazil" },
  ];

  const loadAuctionsList = useCallback(async () => {
    setLoading(true);
    try {
      console.log("en ue")
      const data = await marketServices.fetchAuctionsList(token, eventId);
      setAuctions(data?.items)
      console.log(JSON.stringify(auctions))
    } catch (error) {
      Toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [opciones]);
  useEffect(() => {
    loadAuctionsList();
  }, [loadAuctionsList]);

  const loadTeams = useCallback(async () => {
    setLoading(true);
    try {
      const data = await albumServices.fetchTeamsInfo(token, eventId);
      setTeams(data);
    } catch (error) {
      Toast.error(error.message);
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

          {/* Lista */}
          <View style={{ paddingTop: 5, flex: 1, alignItems: "center" }}>
            {opciones == 2 && (
              <View style={styles.shadow}>
                <TouchableOpacity style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={styles.botonañadir}
                    colors={["#D13256", "#FE5F42"]}
                  >
                    <Text style={styles.textAñadir}>
                      + Añade tus jugadores al mercado
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
            <FlatList
              showsVerticalScrollIndicator={false}
              data={auctions}
              keyExtractor={(_, index) => index.toString()}
              ListEmptyComponent={<Text>No se encontraron coincidencias</Text>}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              onEndReached={() => {
                console.log("hola");
              }}
              renderItem={({ item }) => {
                if (opciones == 1) return <PlayerCardOG auctionData={item}/>;
                if (opciones == 2) return <PlayerCardMS />;
                if (opciones == 3) return <PlayerCardMO />;
              }}
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
  botonañadir: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
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
  textAñadir: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
    textAlign: "left",
  },
  containerButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
