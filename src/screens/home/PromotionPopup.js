import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StickerTemplate from "../../components/StickerTemplate";
import { ModalPopup } from "../../components/ModalPopup";

export default function PromotionPopup({
  visible,
  onAdClick,
  setVisibleAnuncio,
  onCloseAd,
  ad
}) {
  return (
    <ModalPopup visible={visible} special={false}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.modalHeader} />
      </View>
      <TouchableOpacity onPress={onAdClick}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: ad?.img }}
            style={{
              height: 175,
              width: 320,
              resizeMode: "contain",
              marginVertical: 10,
            }}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          marginVertical: 30,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        ¡Felicidades, has conseguido un sobre!
      </Text>
      <TouchableOpacity
        onPress={() => {
          setVisibleAnuncio(false);
          onCloseAd();
        }}
      >
        <LinearGradient
          colors={["#D13256", "#FE5F42"]}
          style={styles.logInButton}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Ver Sobre</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ModalPopup>
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
