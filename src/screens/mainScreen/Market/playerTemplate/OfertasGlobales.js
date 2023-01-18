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

import CreateBid from "../modales/CreateBid";
import DirectBuy from "../modales/DirectBuy";
import MoneyIcon from "../../../../../assets/app/moneyIcon.png";
import styles from './styles';

const convertTime = (finishDate) => {
	const actual = new Date(Date.now());
	const end = new Date(Date.parse(finishDate));

	let minutes = Math.floor((end - actual) / 60000);
	const hours = Math.floor(minutes / 60);
	minutes = minutes % 60;

	return hours + "h " + minutes + "m";
};

const { height, width } = Dimensions.get("window");
export default function PlayerCardOG({ auctionData = {}, triggerReload }) {

	//Visible Modal Ofertas Globales - Ofertar
	const [visible, setVisible] = useState(false);
	const [visibleBuy, setVisibleBuy] = useState(false);

	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "Medio Campista",
		forward: "Delantero",
	};

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

					{/* Body */}
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
						<TouchableOpacity onPress={() => setVisible(true)}>
							<LinearGradient
								style={styles.editButton}
								colors={["#D13256", "#FE5F42"]}
							>
								<Text style={styles.textButton}>Ofertar</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>

					<View style={styles.buttonInfoContainer}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Ionicons name={"time-outline"} color={"black"} size={22} />
							<Text style={styles.textCard}>
								{convertTime(auctionData?.finishDate)}
							</Text>
						</View>
						<TouchableOpacity onPress={() => setVisibleBuy(true)}>
							<LinearGradient
								style={styles.editButton}
								colors={["#D13256", "#FE5F42"]}
							>
								<Text style={styles.textButton}>Compra directa</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{visible && (
				<CreateBid
					visible={visible}
					setVisible={setVisible}
					auctionData={auctionData}
					triggerReload={triggerReload}
				/>
			)}
			{visibleBuy && (
				<DirectBuy
					setVisible={setVisibleBuy}
					visible={visibleBuy}
					auctionData={auctionData}
					triggerReload={triggerReload}
				/>
			)}
		</>
	);
}
