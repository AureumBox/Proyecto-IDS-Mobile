import React, { useEffect, useState, useCallback } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectTeamModal from "../SelectTeamModal";
import Header from "../../../../components/HeaderComponent";
import ProgressBar from "../ProgressBar";
import Carousel from "../Carousel";
import NoStickerSlot from "../NoStickerSlot";
import StickerTemplate from "../../../../components/StickerTemplate";
import AlbumHeader from "../AlbumHeader";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTeam,
  setStickers,
  setIdStickerSelected,
  setPercentage,
} from "../../../../state/albumSlice";
import {
  fetchPageInfo,
  claimSticker,
  fetchAlbumInfo,
} from "../../../../services/inventory.services";

export default function AlbumPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState([]);
  const [showAlbum, setShowAlbum] = useState(false);
  const [eventId, setEventId] = useState(1);
  const [change, setChange] = useState(false);
  const [teamsModalOpens, setTeamsModalOpens] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const teamName = useSelector((state) => state.album.currentTeam.name);
  const percentage = useSelector((state) => state.album.percentage);
  const teamList = useSelector((state) => state.album.teamList);
  const index = useSelector((state) => state.album.currentTeam.index);
  const stickerSelected = useSelector((state) => state.album.idStickerSelected);
  const currentPage = useSelector(
    (state) => state.album.currentTeam.currentPage
  );

  const STICKER_PER_PAGE = 6;
  let indexStart = STICKER_PER_PAGE * currentPage;
  let indexEnd = indexStart + STICKER_PER_PAGE;

  // PARA OBTENER LA INFORMACION DEL ALBUM
  const loadAlbumInfo = useCallback(async () => {
    //percentage
    setLoading(true);
    try {
      const data = await fetchAlbumInfo(token, eventId);
      console.log(data.actualProgressPercentage);
      dispatch(setPercentage(data.actualProgressPercentage));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [token, eventId]);

  useEffect(() => {
    loadAlbumInfo();
  }, [loadAlbumInfo]);

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
      const teamId = teamList[index].id;

      const data = await fetchPageInfo(token, eventId, teamId);
      setPageInfo(data.item.stickers);
      dispatch(setStickers(data.item.stickers));
      setShowAlbum(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await loadPageInfo();
      setChange(false);
    })();
  }, [token, index, change]);

  async function putSticker(idSlot = 0) {
    if (stickerSelected == 0) {
      return 0;
    }
    try {
      if (idSlot != stickerSelected) {
        throw new Error("Esta no es la casilla del sticker");
      }
      const data = await claimSticker(token, eventId, stickerSelected);
      dispatch(setIdStickerSelected(0));
      setChange(true);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={styles.fondo}>
      <Spinner visible={loading} textContent={"Cargando..."} />

      {/* mostrar seleccion de equipo */}
      <SelectTeamModal
        isVisible={teamsModalOpens}
        onClose={() => {
          setTeamsModalOpens(false);
        }}
      />

      <Header />

      <View style={styles.container}>
        <ProgressBar completedPercent={percentage} />
        <View>
          <TouchableOpacity onPress={() => setTeamsModalOpens(true)}>
            <Ionicons
              name="search-circle"
              size={40}
              color="#63130B"
              style={styles.lupa}
            />
          </TouchableOpacity>
        </View>

        {/* Pagina de album */}
        <View style={styles.albumfondo}>
          <AlbumHeader teamName={teamName} />
          <View style={styles.containerBarajitas}>
            <ScrollView>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {/* stickers del equipo */}
                {pageInfo
                  ?.slice(indexStart - 6, indexEnd - 6)
                  .map((sticker, i) => (
                    <View key={i} style={{ bottom: 90, right: 35 }}>
                      <View style={{ margin: 1 }}>
                        {!sticker?.isAttached && (
                          <TouchableOpacity
                            key={i}
                            onPress={() => putSticker(sticker?.id)}
                          >
                            <NoStickerSlot
                              key={i}
                              idCode={sticker?.id}
                              nameCode={sticker?.playerName}
                            />
                          </TouchableOpacity>
                        )}
                        {sticker?.isAttached && (
                          <StickerTemplate key={i} sticker={sticker} />
                        )}
                      </View>
                    </View>
                  ))}
              </View>
            </ScrollView>
          </View>
        </View>
        <Carousel />
      </View>
    </View>
  );
}
