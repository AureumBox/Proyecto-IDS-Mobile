import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { ModalPopup } from "../../../components/ModalPopup";

export default function CreateAuction({
	player = {},
	visible,
	setVisible,
	postAuction,
}) {
	const { height, width } = Dimensions.get("window");
	const hideDialog = () => setVisible(false);
	const [text, setText] = useState("");

	const { token } = useSelector((state) => state.auth);
	const { currentEventId } = useSelector((state) => state.auth);
	const [directPurchase, setDirectPurchase] = useState({});
	const [loading, setLoading] = useState(true);
	const [initialValue, setInitialValue] = useState(0);

	/* const postAuction = async () => {
		setLoading(true);
		try {
			const data = await marketServices.postAuction(
				token,
				currentEventId,
				initialValue,
				directPurchase,
				player?.id
			);
			alert(data.message);
		} catch (error) {
			// Toast.error(error.message);
			alert(error.message);
		} finally {
			setLoading(false);
			setVisible(false)
		}
	}; */

	return (
		<ModalPopup visible={visible} special={false}>
			<Spinner
				visible={loading}
				size="large"
				color="#E7484D"
				overlayColor="#FFFFFF50"
			/>
			{/* Modal precio inicial y compra directa*/}
			<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.fondoModal}>
				<TouchableOpacity>
					<Ionicons
						name="help-circle-outline"
						size={26}
						color="black"
						style={{
							position: "absolute",
							alignSelf: "flex-end",
							paddingRight: 10,
							paddingTop: 3,
						}}
					/>
				</TouchableOpacity>
			</LinearGradient>
			<View style={styles.circuloBlanco} />
			<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.circuloDeg}>
				<Image source={{ uri: player?.img }} style={styles.fotocirculo} />
			</LinearGradient>
			<Text style={styles.nombreJugador}>{player?.playerName}</Text>

			<View style={{ width: "100%", height: 70, flexDirection: "row" }}>
				{/* Precio inicial */}
				<View
					style={{
						width: "50%",
						height: 70,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={styles.subtexto}>Precio Inicial</Text>
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.money}>
						<TextInput
							style={styles.oferta}
							keyboardType={"numeric"}
							value={initialValue}
							onChangeText={(text) => setInitialValue(text)}
						/>
					</LinearGradient>
				</View>

				{/* Compra directa */}
				<View
					style={{
						width: "50%",
						height: 70,
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={styles.subtexto}>Compra directa</Text>
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.money}>
						<TextInput
							style={styles.oferta}
							keyboardType={"numeric"}
							value={directPurchase}
							onChangeText={(text) => setDirectPurchase(text)}
						/>
					</LinearGradient>
				</View>
			</View>

			{/* Botones */}
			<View style={styles.containerButtons}>
				<LinearGradient
					colors={["#D13256", "#FE5F42"]}
					style={styles.editButtonacep}
				>
					<TouchableOpacity style={styles.whitebutton}>
						<Text
							style={{ color: "#E6474E", fontWeight: "600" }}
							onPress={hideDialog}
						>
							Cancelar
						</Text>
					</TouchableOpacity>
				</LinearGradient>

				<LinearGradient
					colors={["#D13256", "#FE5F42"]}
					style={styles.editButtonacep}
				>
					<TouchableOpacity
						onPress={() => {
							postAuction(
								initialValue,
								directPurchase,
								player?.id,
								setLoading,
								setVisible
							);
						}}
					>
						<Text style={{ color: "#fff", fontWeight: "600" }}>Aceptar</Text>
					</TouchableOpacity>
				</LinearGradient>
			</View>
		</ModalPopup>
	);
}

const styles = StyleSheet.create({
	fondoModal: {
		width: "100%",
		height: 85,
		alignSelf: "center",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	circuloBlanco: {
		width: 120,
		height: 120,
		borderRadius: 60,
		alignSelf: "center",
		position: "absolute",
		borderWidth: 7,
		borderColor: 'white',
		zIndex: 999,
		marginTop: 15,
	},
	circuloDeg: {
		width: 110,
		height: 110,
		borderRadius: 60,
		alignSelf: "center",
		position: "absolute",
		marginTop: 20,
	},
	fotocirculo: {
		width: '99%',
		height: '99%',
		resizeMode: "contain",
		alignSelf: "center",
		overflow: 'hidden'
	},
	subtexto: {
		fontSize: 11,
		marginBottom: 2,
		fontWeight: "500",
		color: "#3D405B",
	},
	containerDinero: {
		flexDirection: "row",
		width: "100%",
		height: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	subtexto: {
		fontSize: 11,
		marginBottom: 2,
		fontWeight: "500",
		color: "#3D405B",
	},
	containerDinero: {
		flexDirection: "row",
		width: "100%",
		height: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	money: {
		height: 25,
		width: 80,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	oferta: {
		width: 75,
		height: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 3,
		paddingLeft: 4,
		fontWeight: "600",
	},
	moneyCoin: {
		height: 20,
		width: 20,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	containerButtons: {
		flexDirection: "row",
		width: "80%",
		justifyContent: "space-between",
		alignItems: "center",
		alignSelf: "center",
		paddingBottom: 30,
		paddingTop: 20,
	},
	whitebutton: {
		height: 25,
		width: 105,
		backgroundColor: "white",
		borderRadius: 30,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	saldost: {
		padding: 10,
		borderRadius: 20,
		margin: 10,
		fontSize: 30,
		fontWeight: "bold",
	},
	nombreJugador: {
		alignSelf: "center",
		borderColor: "#B02419",
		fontSize: 20,
		marginTop: 50,
		fontWeight: "bold",
		marginBottom: 20,
	},
	infoData: {
		borderWidth: 3,
		borderColor: "#B02419",
		padding: 8,
		borderRadius: 20,
		margin: 10,
		width: "100%",
	},
	editButtonacep: {
		backgroundColor: "#B02419",
		width: 110,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	imagePlayerDialog: {
		width: 100,
		height: 100,
		borderRadius: 100,
		resizeMode: "stretch",
		borderWidth: 3,
		borderColor: "#B02419",
	},
	editButtoncanc: {
		backgroundColor: "#B02419",
		width: 110,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
	},
	editButton: {
		width: 90,
		height: 30,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
	},
	posiciontext: {
		paddingLeft: 3,
		paddingRight: 3,
		fontSize: 10,
		lineHeight: 25,
		color: "white",
		fontWeight: "500",
	},
	textCard: {
		fontSize: 12,
		lineHeight: 25,
		color: "black",
		fontWeight: "600",
	},
	containerPlayerName: {
		transform: [{ rotate: "-90deg" }],
		position: "absolute",
		left: 0,
		top: 0,
		paddingTop: 10,
		width: 100,
		alignItems: "center",
		bottom: "-0.1%",
	},
	imagePlayer: {
		height: 115,
		marginLeft: 20,
		resizeMode: "contain",
	},
	playerName: {
		fontWeight: "bold",
		fontSize: 14,
		color: "#FFFFFF",
	},
	card: {
		backgroundColor: "white",
		borderRadius: 10,
		width: "100%",
		height: 115,
		flexDirection: "row",
		marginTop: 10,
	},
	imgCard: {
		height: "100%",
		width: 100,
		borderRadius: 10,
		justifyContent: "center",
		flexDirection: "row",
		position: "relative",
	},
	textbotones: {
		fontSize: 10,
		color: "white",
		fontWeight: "bold",
	},
});
