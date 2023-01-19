import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Bench from "./Bench";
import { ModalPopup } from "../../../components/ModalPopup";

const data = [
	{ key: "1", value: "Seleccione una posición", disabled: true },
	{ key: "2", value: "Arquero" },
	{ key: "3", value: "Defensa" },
	{ key: "4", value: "Medio Campo" },
	{ key: "5", value: "Delantero" },
];

const dataEquipos = [
	{ key: "1", value: "Seleccione un equipo", disabled: true },
	{ key: "2", value: "España" },
	{ key: "3", value: "Argentina" },
	{ key: "4", value: "Alemania" },
	{ key: "5", value: "Brazil" },
];

export default function ButtonAddAuction({ triggerReload }) {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<ModalPopup visible={visible} special={true}>
				<Bench setVisible={setVisible} triggerReload={triggerReload} />
			</ModalPopup>

			<TouchableOpacity
				style={{ alignItems: "center" }}
				onPress={() => setVisible(true)}
			>
				<LinearGradient
					style={styles.addButton}
					colors={["#D13256", "#FE5F42"]}
				>
					<Text style={styles.addText}>
						+ Añade tus jugadores al mercado
					</Text>
				</LinearGradient>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	addButton: {
		width: "100%",
		height: 40,
		borderRadius: 10,
		padding: 8,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 15,
	},
	addText: {
		fontWeight: "bold",
		fontSize: 14,
		lineHeight: 18,
		color: "white",
		textAlign: "left",
	}
});
