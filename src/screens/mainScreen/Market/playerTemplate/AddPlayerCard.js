import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	TouchableOpacity,
	ImageBackground
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import CreateAuction from "../modales/CreateAuction";
import styles from './styles';

const { height, width } = Dimensions.get("window");
export default function AddPlayerCard({ player = {}, postAuction }) {
	//Visible Modal Ofertas Globales - Ofertar
	const [visible, setVisible] = useState(false);

	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "Medio Campista",
		forward: "Delantero",
	};

	return (
		<>
			<TouchableOpacity
				onPress={() => {
					setVisible(true);
				}}
			>
				<View style={styles.container}>
					<LinearGradient colors={["#D13256", "#FE5F42"]} style={styles.cardImage} >
						<ImageBackground
							resizeMode="contain"
							source={{ uri: player?.img }}
							style={styles.cardImage}
						>
							<Image
								resizeMode="contain"
								source={{ uri: player?.team?.badge }}
								style={styles.badgeImage}
							/>
							<Text style={[styles.playerName, styles.specialText]}>
								{player?.playerName}
							</Text>
						</ImageBackground>
					</LinearGradient>

					<View style={styles.containerInfo}>
						<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.playerPosition}>
							<Text style={styles.playerPositionText}>
								{positionSpa[player?.position]}
							</Text>
						</LinearGradient>

						{/* Body */}
						<View
							style={{ flexDirection: "row", marginTop: 15, marginLeft: 110 }}
						>
							<Text
								style={{ fontSize: 18, color: "#77798C", fontWeight: "600" }}
							>
								PTS{" "}
							</Text>
							<Text
								style={{ fontSize: 28, color: "#3D405B", fontWeight: "800" }}
							>
								49
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			{/* Modal Compra directa*/}

			{visible && (
				<CreateAuction
					player={player}
					visible={visible}
					setVisible={setVisible}
					postAuction={postAuction}
				/>
			)}
		</>
	);
}
