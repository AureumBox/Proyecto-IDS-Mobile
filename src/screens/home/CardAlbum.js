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
import albumImg from "../../../assets/app/album.png";

export default function CardAlbum({ navigation }) {
  return (
    <View style={styles.containerCuadro}>
      <View style={styles.containerImgAlbum}>
        <Image source={albumImg} style={styles.sobreImg}></Image>
        <View style={styles.barraProgreso}>
          <View style={styles.porcentaje}></View>
        </View>
        <Text
          style={{
            marginRight: "30%",
            marginTop: 2,
            color: "#3D405B",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          50% Completado
        </Text>
      </View>
      <View style={styles.containerinfo}>
        <Text style={styles.textoFeature}>Álbum</Text>
        <Text style={styles.textoSecondary}>Colecciona todos los cromos</Text>
        <View style={styles.espacio}>
          <View style={styles.casilla}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("", "Proximamente...");
              }}
            >
              <View style={styles.botonSecondary}>
                <Text style={styles.textoBotonSeconday}>
                  Intercambiar cromos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.casilla}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AlbumNavigator")}
            >
              <LinearGradient
                colors={["#D13256", "#FE5F42"]}
                style={styles.boton}
              >
                <Text style={styles.textoBoton}>Ver álbum</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  espacio: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    paddingRight: 15,
    paddingLeft: 70,
  },
  casilla: {
    height: 40,
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  botonSecondary: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 30,
    marginTop: 7,
    marginRight: 8,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3A4159",
    borderWidth: 2,
  },
  containerCuadro: {
    backgroundColor: "#8FCCCA",
    marginTop: 10,
    borderRadius: 12,
    height: 200,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  containerinfo: {
    backgroundColor: "white",
    width: "100%",
    height: 90,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerImgAlbum: {
    width: "100%",
    height: 110,
    alignItems: "flex-end",
    marginLeft: 20,
    flexDirection: "column",
  },
  boton: {
    height: 30,
    width: 100,
    borderRadius: 20,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImg: {
    width: "100%",
    height: 110,
    alignItems: "center",
  },
  sobreImg: {
    marginTop: 15,
    height: "140%",
    resizeMode: "contain",
  },
  barraProgreso: {
    height: 20,
    width: 150,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginTop: -125,
    marginRight: 60,
  },
  porcentaje: {
    height: "100%",
    width: "50%", //Colocar porcentaje de llenado
    backgroundColor: "#3A4159",
    borderRadius: 20,
    alignItems: "center",
  },
  textoFeature: {
    color: "#3A4159",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 5,
  },
  textoSecondary: {
    color: "#808080",
    fontWeight: "light",
    fontSize: 12,
    marginTop: 2,
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  textoBotonSeconday: {
    color: "#3D405B",
    fontWeight: "bold",
    fontSize: 14,
  },
});
