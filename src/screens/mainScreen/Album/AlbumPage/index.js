import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectTeamModal from '../SelectTeamModal';
import Header from "../../../../components/HeaderComponent";
import ProgressBar from "../ProgressBar";
import Carousel from "../Carousel";
import NoStickerSlot from "../NoStickerSlot";
import StickerTemplate from "../../../../components/StickerTemplate";
import AlbumHeader from "../AlbumHeader";
import Spinner from "react-native-loading-spinner-overlay";
import styles from '../styles';
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTeam,
  setStickers,
  setIdStickerSelected,
  setPercentage,
} from "../../../../state/albumSlice.js";
import {
  fetchPageInfo,
  claimSticker,
  fetchAlbumInfo,
} from "../../../../services/inventory.services";

export default function AlbumPage() {
  console.log('COMPONENT: AlbumPage executes');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [eventId, setEventId] = useState(1);
  const [teamsModalOpens, seTeamsModalOpens] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const teamName = useSelector((state) => state.album.currentTeam.name);

  const teamStickers = useSelector((state) => state.album.currentTeam.stickers);
  const pageInfo = teamStickers;

  const percentage = useSelector((state) => state.album.percentage);
  const teamId = useSelector((state) => state.album.currentTeam.id);
  const stickerSelected = useSelector((state) => state.album.idStickerSelected);
  /*const currentPage = useSelector(
    (state) => state.album.currentTeam.currentPage
  );*/
  // PARA CAMBIAR DE PAGINA
  const loadPageInfo = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchPageInfo(token, eventId, teamId);
      dispatch(setStickers(data.item.stickers));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [token, eventId, teamId]);
  useEffect(() => {
    loadPageInfo();
  }, [loadPageInfo]);

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
      await loadAlbumInfo();
      await loadPageInfo();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={styles.fondo}>
      <Spinner visible={loading} textContent={"Cargando..."} />

      <SelectTeamModal isVisible={teamsModalOpens} onClose={() => { setTeamsModalOpens(false); }} />
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
              {pageInfo?.map((sticker, i) => (
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
