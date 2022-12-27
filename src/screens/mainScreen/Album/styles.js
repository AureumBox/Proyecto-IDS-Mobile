import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center",
  },
  listHeadLine: {
    color: "#333",
    fontSize: 21,
    fontWeight: "bold",
  },
  listItemName: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 13,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  listItemImageContainer: {
    width: 89,
    height: 89,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemImage: {
    width: 55,
    height: 55,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCC",
  },
  albumfondo: {
    width: "90%",
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