import { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/HeaderComponent";
import FantasyDrawer from "./Fantasy/FantasyDrawer";
import Cancha from "../../../assets/cancha.jpg";
import { IconButton, MD3Colors } from "react-native-paper";
import { TextInput } from "react-native-paper";
import EmptyPlayer from "./Fantasy/EmptyPlayer";
import * as fantasyServices from "../../services/fantasy.services";

export default function Fantasy({ navigation }) {
  const { height } = Dimensions.get("window");
  const { token } = useSelector((state) => state.auth);
  const {selectedPlayer} = useSelector((state) => state.fantasy);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const eventId = 1;

  const posicion = "0-2, 3-5, 6-9, 10";
  const nombres = "delante, medio, defensa, arquero";

  const jugadores = [
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
    "https://figuritasqatar.com.ar/wp-content/uploads/angel-di-maria-231x300.png",
  ];


  

  const addPlayer = (key) => {
    console.log(key, selectedPlayer.id, selectedPlayer.position);
    if ((selectedPlayer.position == "Delantero") && (key >= 0 && key <= 2)){
      console.log("posicion correcta")
      insertPlayer(token, eventId, selectedPlayer)
      
    } else if ((selectedPlayer.position == "MedioCampo") && (key >= 3 && key <= 5)){
      console.log("posicion correcta")
      insertPlayer(token, eventId, selectedPlayer)
      
    } else if ((selectedPlayer.position == "Defensa") && (key >= 6 && key <= 9)){
      console.log("posicion correcta")
      insertPlayer(token, eventId, selectedPlayer)
      
    } else if ((selectedPlayer.position == "Arquero") && (key == 10)){
      console.log("posicion correcta")
      insertPlayer(token, eventId, selectedPlayer)
      
    } else {
      alert("Posicion incorrecta")
    }
  };

  const insertPlayer = async (token, eventId, selectedPlayer) => {
    setLoading(true);
    try {
      const data = await fantasyServices.insertPlayer(token, eventId, selectedPlayer);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadSquad = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fantasyServices.fetchSquad(token, eventId);
      console.log('gg'+JSON.stringify(data));
      const squad = data;
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSquad();
  }, [loadSquad]);

  return (
    <View style={styles.fondo}>
      <Header />

      <View style={styles.container}>
        {/* Drawer */}
        <View style={{ ...styles.drawer, width: open ? "80%" : 0 }}>
          <IconButton icon="close" size={20} onPress={() => setOpen(false)} />
          <FantasyDrawer />
        </View>

        {/* Titulo */}
        <View style={styles.containerpuntaje}>
          <Text style={styles.textSt}>FANTASY</Text>
        </View>

        {/* Cancha */}
        <View style={styles.container2}>
          <Image source={Cancha} style={styles.imCancha} />
          <View style={styles.contJugadoresCancha}>
            {jugadores.map((jugador, index) => (
              <TouchableOpacity
                key={index + ""}
                onPress={() => addPlayer(index)}
              >
                <View style={eval(`styles.jugador${index + 1}`)}>
                  <EmptyPlayer />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/*  */}
          <View style={styles.carruselContainer}>
            <View style={styles.cont}>
              <Text style={styles.texto}>¡Arma tu equipo!</Text>
              <Text style={styles.bancas}>Almacen</Text>
              <IconButton
                style={styles.opciones}
                icon="dots-horizontal"
                size={20}
                onPress={() => setOpen(true)}
              />
            </View>
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
    backgroundColor: "#70ABAF",
  },
  inputStyle: {
    backgroundColor: "#F2F6FE",
    margin: 10,
  },
  drawer: {
    position: "absolute",
    zIndex: 999,
    height: "80%",
    backgroundColor: "#bbb",
    right: 0,
  },
  jugador1: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 40,
    left: 20,
  },
  jugador2: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 40,
    left: "50%",
    marginLeft: -25,
  },
  jugador3: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 40,
    right: 20,
  },
  jugador4: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 120,
    left: 20,
  },
  jugador5: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 120,
    left: "50%",
    marginLeft: -25,
  },
  jugador6: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 120,
    right: 20,
  },
  jugador7: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 205,
    left: 5,
  },
  jugador8: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 205,
    left: "50%",
    marginLeft: -54.5,
  },
  jugador9: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 205,
    left: "50%",
    marginLeft: 4.5,
  },
  jugador10: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 205,
    right: 5,
  },
  jugador11: {
    width: 50,
    height: 70,
    position: "absolute",
    top: 285,
    left: "50%",
    marginLeft: -25,
  },
  contJugadoresCancha: {
    backgroundColor: "#ffffff50",
    position: "absolute",
    width: 235,
    height: 365,
  },
  canchaImg: {
    width: 70,
    height: 100,
  },
  bancaImg: {
    width: 100,
    height: 130,
    marginLeft: 2.5,
    marginRight: 2.5,
  },
  cont: {
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  opciones: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    right: 0,
  },
  bancas: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  puntajeBoton: {
    width: 90,
    height: 20,
    backgroundColor: "#B02419",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  containerpuntaje: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  fondo: {
    flex: 1,
    backgroundColor: "#70ABAF",
  },
  textoBoton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  textSt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  imCancha: {
    height: "62%",
    justifyContent: "space-evenly",
    resizeMode: "contain",
  },
  container2: {
    width: "100%",
    height: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  carruselContainer: {
    width: "90%",
    height: "30%",
  },
  carrusel: {
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 3,
    paddingTop: 5,
  },
});
