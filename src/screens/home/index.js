import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import * as eventServices from "../../services/event.services";
import * as stickerServices from "../../services/sticker.services";
import * as albumServices from "../../services/inventory.services";
import { watchAd, getAdRedirectUrl } from "../../services/ad.services";
import * as userServices from "../../state/authSlice";
import * as fantasyServices from "../../state/fantasySlice";
import * as albumSlice from "../../state/albumSlice";
import CardSticker from "./CardSticker";
import CardAlbum from "./CardAlbum";
import CardFantasy from "./CardFantasy";
import StickerPopup from "./StickerPopup";
import PromotionPopup from "./PromotionPopup";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [visibleAnuncio, setVisibleAnuncio] = useState(false);
  const [visibleStickers, setVisibleStickers] = useState(false);
  const [ad, setAd] = useState(null);
  const [joinedEvent, setJoinedEvent] = useState(false);
  const [obtainedStickers, setObtainedStickers] = useState([]);
  const [eventsListPicker, setEventsListPicker] = useState([]);
  const [isAvailable, setIsAvailable] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { currentEventId } = useSelector((state) => state.auth);
  const { percentage } = useSelector((state) => state.album);
  const dispatch = useDispatch();

  const onClaimClick = async () => {
    setLoading(true);
    try {
      setAd(await watchAd(token));
      setVisibleAnuncio(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onCloseAd = async () => {
    setLoading(true);
    try {
      setObtainedStickers(
        await stickerServices.obtainStickers(token, currentEventId)
      );
      setVisibleStickers(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onAdClick = () => {
    const redirectUrl = getAdRedirectUrl(ad?.id);
    Linking.openURL(redirectUrl);
  };

  const selectEvent = async (index) => {
    setLoading(true);
    try {
      const event = eventsList[index];
      if (!event?.imAlreadyPlayingIn) {
        await joinGame(token, event?.id);
      }

      const data = await eventServices.fetchEventInfo(token, event?.id);
      dispatch(userServices.setMoney(data?.money));
      dispatch(userServices.setCurrentEventId(event?.id));
      dispatch(fantasyServices.setPoints(data?.points));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const joinGame = async (token, id) => {
    const join = await eventServices.joinGame(token, id);

    /* Bienvenida al evento */
    alert(join.message);

    setJoinedEvent(true);
  };

  const loadEventList = useCallback(async () => {
    setLoading(true);
    try {
      const data = await eventServices.fetchEventsList(token);
      setEventsList(data.items);

      let newArray = data.items.map((item, index) => {
        return { key: index, value: item.eventName };
      });
      setEventsListPicker(newArray);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setJoinedEvent(false);
    }
  }, [token, joinedEvent]);
  useEffect(() => {
    loadEventList();
  }, [loadEventList]);

  const loadAlbumPercentage = async () => {
    setLoading(true);
    if (currentEventId == 0) return;
    try {
      const data = await albumServices.fetchAlbumInfo(token, currentEventId);
      dispatch(albumSlice.setPercentage(data.actualProgressPercentage));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadAlbumPercentage();
  }, [token]);

  const stickerStatus = useCallback(async () => {
    setLoading(true);
    try {
      const data = await stickerServices.fetchStickerStatus(
        token,
        currentEventId
      );
      setIsAvailable(data?.success);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [token, joinedEvent]);
  useEffect(() => {
    stickerStatus();
  }, [stickerStatus]);

  return (
    <View style={styles.fondo}>
      <Spinner
        visible={loading}
        size="large"
        color="#E7484D"
        overlayColor="#FFFFFF50"
      />
      {/* Ventana Emergente de drop de Stickers */}
      <StickerPopup
        visible={visibleStickers}
        obtainedStickers={obtainedStickers}
        setVisibleStickers={setVisibleStickers}
        setIsAvailable={setIsAvailable}
      />

      {/* Ventana Emergente de Anuncio */}
      <PromotionPopup
        visible={visibleAnuncio}
        onAdClick={onAdClick}
        setVisibleAnuncio={setVisibleAnuncio}
        onCloseAd={onCloseAd}
        ad={ad}
      />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textSt}>Home</Text>
          {/* Seleccion de competencia */}
          <View>
            <Text style={styles.textoEvento}>Competición</Text>
            <SelectList
              defaultOption={eventsListPicker[0]}
              setSelected={(val) => setSelected(val)}
              data={eventsListPicker}
              notFoundText={<Text>No hay coincidencias</Text>}
              onSelect={() => selectEvent(selected)}
              onFocus={() => setIsFocus(true)}
            />
          </View>

          {/* cards */}
          <CardSticker
            onClaimClick={onClaimClick}
            setVisibleAnuncio={setVisibleAnuncio}
            setVisibleStickers={setVisibleStickers}
            isAvailable={isAvailable}
            setIsAvailable={setIsAvailable}
          />
          <CardAlbum navigation={navigation} percentage={percentage} />
          <CardFantasy navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
  },
  modalHeader: {
    width: "100%",
    paddingVertical: 20,
  },
  logInButton: {
    backgroundColor: "#70ABAF",
    padding: 20,
    borderRadius: 120,
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  boton: {
    height: 30,
    width: 100,
    borderRadius: 20,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  botonSobre: {
    height: 30,
    width: 100,
    borderRadius: 20,
    marginTop: 7,
    marginLeft: 210,
    justifyContent: "center",
    alignItems: "center",
  },
  fondo: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  textSt: {
    color: "#3A4159",
    fontWeight: "bold",
    fontSize: 26,
  },
  textoEvento: {
    color: "#3D405B",
    fontWeight: "medium",
    fontSize: 14,
    marginTop: 5,
  },
});
