import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ModalPopup } from "../../../components/ModalPopup";

import botonX from "../../../../assets/appAssets/x.png";
import Header from "../../../components/HeaderComponent";
import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";
import NoStickerSlot from "./NoStickerSlot";
import StickerTemplate from "../../../components/StickerTemplate";
import AlbumHeader from "./AlbumHeader";

const { width, height } = Dimensions.get("window");

import { useDispatch, useSelector } from "react-redux";
import { setCurrentTeam, setStickers, setIdStickerSelected, setPercentage } from "../../../state/albumSlice.js";
import { store } from "../../../state/store";

import {
  fetchPageInfo,
  claimSticker,
  fetchAlbumInfo,
} from "../../../services/inventory.services";

export default function AlbumPage({ navigation }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState({});
  const [showAlbum, setShowAlbum] = useState(false);
  const [eventId, setEventId] = useState(1);
  const [change, setChange] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const teamName = useSelector((state) => state.album.currentTeam.name);
  const percentage = useSelector((state) => state.album.percentage);
  const teamList = useSelector((state) => state.album.teamList);
  const index = useSelector((state) => state.album.currentTeam.index);
  const stickerSelected = useSelector((state) => state.album.idStickerSelected);

  let teamId = 0;

  useEffect(() => {
    (async () => {
      await loadPageInfo();
      setChange(false);
    })();
  }, [token, index, change]);

  useEffect(() => {
    (async () => {
      await loadAlbumInfo();
    })();
  }, [change]);

  const loadAlbumInfo = async () => { //percentage 
    setLoading(true);
    try {
      const data = await fetchAlbumInfo(token, eventId);
      dispatch(setPercentage(data.actualProgressPercentage));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadPageInfo = async () => {
    setLoading(true);
    try {
      dispatch(
        setCurrentTeam({
          id: teamList[index].id,
          name: teamList[index].name,
          obtainedCount: teamList[index].stickers.length,
        })
      );
      teamId = teamList[index].id;

      const data = await fetchPageInfo(token, eventId, teamId);
      setPageInfo(data.item);
      dispatch(setStickers(pageInfo));
      setShowAlbum(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  async function putSticker(idSlot = 0) {
    if ((stickerSelected == 0)) {
      return 0;
    }
    try {
      if (idSlot != stickerSelected) {
        throw new Error("Esta no es la casilla del sticker");
      }
      const data = await claimSticker(token, eventId, stickerSelected);
      dispatch(setIdStickerSelected(0))
      setChange(true);
    } catch (error) {
      alert(error.message);
    }
  }

  const oneTeam = ( { item } ) => (
    <View style={styles.listItem}>
      <View style={styles.listItemImageContainer}>
        <Image 
          source={{uri: item.badge}}
          style={styles.listItemImage}
        />
      </View>
      <Text style={styles.listItemName}>{item.name}</Text>
    </View>
  )

  const itemSeparator = () => {
    return <View style={styles.separator}/>
  }

  return (
    <View style={styles.fondo}>

      {/* Ventana Emergente con el Filtro de Equipos */}
      <ModalPopup visible={filterVisible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setFilterVisible(false)}>
              <Image source={botonX} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView>
          <FlatList
            ListHeaderComponentStyle = {styles.listHeader}
            ListHeaderComponent = {<Text style={styles.listHeadLine}>Filtrar por Equipos</Text>}
            ItemSeparatorComponent = { itemSeparator }
            data = { teamList }
            renderItem = { oneTeam }
          />
        </SafeAreaView>
      </ModalPopup>

      <Header />
      <View style={styles.container}>
        <ProgressBar completedPercent={percentage} />
        <View>
          <TouchableOpacity onPress={() => setFilterVisible(true)}>
            <Ionicons
              name="search-circle"
              size={40}
              color="#63130B"
              style={styles.lupa}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.albumfondo}>
          {/* Header del album */}
          <AlbumHeader teamName={teamName} />

          {/* Pagina del album */}
          <View style={styles.containerBarajitas}>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {pageInfo?.stickers?.map((sticker, i) => (
                <View style={{ bottom: 90, right: 35 }}>
                  <View style={{ margin: 1 }}>
                    {!sticker?.isAttached && (
                      <TouchableOpacity
                        key={i}
                        onPress={() => putSticker(sticker?.id)}
                      >
                        <NoStickerSlot
                          idCode={sticker?.id}
                          nameCode={sticker?.playerName}
                          key={i}
                        />
                      </TouchableOpacity>
                    )}

                    {sticker?.isAttached && (
                      <StickerTemplate sticker={sticker} key={i} />
                    )}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Carousel />
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
  modalHeader: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listHeadLine: {
    color: '#333',
    fontSize: 21,
    fontWeight: 'bold',
  },
  listItemName: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 13
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13
  },
  listItemImageContainer: {
    width: 89,
    height: 89,
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemImage: {
    width: 55,
    height: 55
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#CCC'
  },
  albumfondo: {
    width: "85%",
    height: "60%",
    backgroundColor: "white",
    marginBottom: "3%",
    borderRadius: 5,
    justifyContent: "flex-start",
  },
  flecha: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  nomPais: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  barra: {
    backgroundColor: "#2A555E",
    width: "100%",
    height: "12%",
    resizeMode: "contain",
    borderRadius: 2,
    flexDirection: "row",
  },
  barajita: {
    backgroundColor: "#BBB9B9",
    width: "25%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  idbarajita: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
  containerBarajitas: {
    flex: 1,
    /*  flexWrap: "wrap",
    alignContent: "space-around", */
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    height: "30%",
    width: "120%",
    overflow: "hidden",
  },
  texto: {
    fontWeight: "bold",
    color: "black",
    fontSize: 26,
  },
  pais: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  barraPorcentaje: {
    width: "60%",
    height: "50%",
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
  carruselcontainer: {
    width: "90%",
    height: "25%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  carrusel: {
    flexDirection: "row",
    width: "90%",
    height: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  fondo: {
    flex: 1,
    backgroundColor: "#70ABAF",
  },
  textSt: {
    color: "#2A555E",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 3,
  },
});
