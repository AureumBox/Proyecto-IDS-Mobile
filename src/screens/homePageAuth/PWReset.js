import React, { useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { forgotPasswordNew } from "../../services/auth.services";
import logoImg from "../../../assets/app/logoVertical.png";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

export default function PWReset({ navigation }) {
  const [showPass, setShowPass] = useState(true);
  const [showConf, setShowConf] = useState(true);
  const [password, setPassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const { code } = useSelector((state) => state.auth);

  const sendPassword = async (code, password) => {
    try {
      if (password == "") throw new Error("Ingrese un correo");

      setLoading(true);
      const response = await forgotPasswordNew(code, password);
      alert(response.message);
      // Toast.error(response.message);
      navigation.navigate("HomeScreen");
    } catch (error) {
      // Toast.error(error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image style={styles.logoSt} source={logoImg} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.body}>Reiniciar Contraseña</Text>
          <Text style={styles.text}>
            Tip: Las contraseñas fuertes incluyen una combinación de números,
            letras y signos de puntuación
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#808080"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Nueva Contraseña"
              autoCorrect={false}
              secureTextEntry={showPass}
			  onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}
              style={styles.buttonEye}
            >
              <Ionicons
                name={showPass === false ? "eye-outline" : "eye-off-outline"}
                size={26}
                color="#808080"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#808080"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.inputText}
              placeholder="Verificar Contraseña"
              autoCorrect={false}
              secureTextEntry={showConf}
            />
            <TouchableOpacity
              onPress={() => {
                setShowConf(!showConf);
              }}
              style={styles.buttonEye}
            >
              <Ionicons
                name={showConf === false ? "eye-outline" : "eye-off-outline"}
                size={26}
                color="#808080"
              />
            </TouchableOpacity>
          </View>
          {/* Boton Iniciar Sesión */}
          <TouchableOpacity onPress={() => sendPassword(code, password)}>
            <LinearGradient
              colors={["#D13256", "#FE5F42"]}
              style={styles.logInButton}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Reiniciar Contraseña
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    height: height * 0.3,
    width: width,
    backgroundColor: "#EAEAEA",
    justifyContent: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contentContainer: {
    flex: 0.7,
    width: "100%",
    paddingHorizontal: 30,
  },
  logoSt: {
    height: height * 0.3,
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  text: {
    paddingBottom: 50,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: "400",
    textAlign: "center",
    color: "#353147",
  },
  body: {
    padding: 20,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#2A555E",
  },
  inputContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: "center",
    borderColor: "#808080",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  inputIcon: {
    position: "absolute",
    alignItems: "center",
    left: 25,
  },
  inputText: {
    paddingLeft: 40,
    marginHorizontal: 20,
  },
  buttonEye: {
    position: "absolute",
    right: 25,
  },
  logInButton: {
    backgroundColor: "#70ABAF",
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 60,
  },
});
