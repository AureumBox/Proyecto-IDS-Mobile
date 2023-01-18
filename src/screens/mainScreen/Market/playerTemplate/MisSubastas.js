import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	ImageBackground,
	TouchableOpacity
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import styles from './styles';
import MoneyIcon from "../../../../../assets/app/moneyIcon.png";
import InfoMyAuction from "../modales/InfoMyAuction";

const { height, width } = Dimensions.get("window");
export default function PlayerCardMS({ auctionData = {} }) {

	//Visible Modal Mis Ofertas - Info
	const [visible, setVisible] = useState(false);

	const convertTime = (finishDate) => {
		const actual = new Date(Date.now());
		const end = new Date(Date.parse(finishDate));

		let minutes = Math.floor((end - actual) / 60000);
		const hours = Math.floor(minutes / 60);
		minutes = minutes % 60;

		return hours + "h " + minutes + "m";
	};

	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "Medio Campo",
		forward: "Delantero",
	};

	console.table('Auction', auctionData)

	return (
		<>
			<View style={styles.container}>
				<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.cardImage}>
					<ImageBackground
						resizeMode="contain"
						source={{ uri: auctionData?.sticker?.img }}
						style={styles.cardImage}
					>
						<Image
							resizeMode="contain"
							source={{ uri: auctionData?.sticker?.team?.badge }}
							style={styles.badgeImage}
						/>
						<Text style={[styles.playerName, styles.specialText]}>
							{auctionData?.sticker?.playerName}
						</Text>
					</ImageBackground>
				</LinearGradient>

				<View style={styles.containerInfo}>
					<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.playerPosition}>
						<Text style={styles.playerPositionText}>
							{positionSpa[auctionData?.sticker?.position]}
						</Text>
					</LinearGradient>

					<View style={styles.buttonInfoContainer}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image
								style={{ width: 25, height: '100%', resizeMode: 'contain' }}
								source={MoneyIcon}
							/>
							<Text style={styles.textCard}>
								{auctionData?.initialPurchaseValue}
							</Text>
						</View>
					</View>

					<View style={styles.buttonInfoContainer}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Ionicons name={"time-outline"} color={"black"} size={22} />
							<Text style={styles.textCard}>
								{convertTime(auctionData?.finishDate)}
							</Text>
						</View>
						<TouchableOpacity onPress={() => setVisible(true)}>
							<LinearGradient
								style={styles.editButton}
								colors={["#D13256", "#FE5F42"]}
							>
								<Text style={styles.textButton}>Ver información</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</View>

				{/* Modal ver información*/}
				{visible && (
					<InfoMyAuction
						auctionData={auctionData}
						setVisible={setVisible}
						visible={visible}
					/>
				)}
			</View>
		</>
	);
}
