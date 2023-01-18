import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";


import { LinearGradient } from "expo-linear-gradient";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Octicons,
	Ionicons,
} from "@expo/vector-icons";

import styles from './styles';
import MoneyIcon from "../../../../../assets/app/moneyIcon.png";
import { ModalMercado } from "../../../../components/ModalMercado";
import EditBid from "../modales/EditBid";
import DirectBuy from "../modales/DirectBuy";

const { height, width } = Dimensions.get("window");
export default function PlayerCardMO({ auctionData = {} }) {
	const [visibleEdit, setVisibleEdit] = React.useState(false);
	const [visibleBuy, setVisibleBuy] = React.useState(false);

	const positionSpa = {
		goalkeeper: "Arquero",
		defender: "Defensa",
		midfielder: "Medio Campista",
		forward: "Delantero",
	};

	const convertTime = (finishDate) => {
		const actual = new Date(Date.now());
		const end = new Date(Date.parse(finishDate));

		let minutes = Math.floor((end - actual) / 60000);
		const hours = Math.floor(minutes / 60);
		minutes = minutes % 60;

		return hours + "h " + minutes + "m";
	};

	return (
		<>
			<View style={styles.container}>
				<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.cardImage}>
					<ImageBackground
						resizeMode="contain"
						source={{ uri: auctionData?.market?.sticker?.img }}
						style={styles.cardImage}
					>
						<Image
							resizeMode="contain"
							source={{ uri: auctionData?.market?.sticker?.team?.badge }}
							style={styles.badgeImage}
						/>
						<Text style={[styles.playerName, styles.specialText]}>
							{auctionData?.market?.sticker?.playerName}
						</Text>
					</ImageBackground>
				</LinearGradient>

				<View style={styles.containerInfo}>
					<LinearGradient colors={['#D13256', '#FE5F42']} style={styles.playerPosition}>
						<Text style={styles.playerPositionText}>
							{positionSpa[auctionData?.market?.sticker?.position]}
						</Text>
					</LinearGradient>

					<View style={styles.buttonInfoContainer}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image
								style={{ width: 25, height: '100%', resizeMode: 'contain' }}
								source={MoneyIcon}
							/>
							<Text style={styles.textCard}>
								{auctionData?.market?.initialPurchaseValue}
							</Text>
						</View>
						<TouchableOpacity onPress={() => setVisibleEdit(true)}>
							<LinearGradient
								style={styles.editButton}
								colors={["#D13256", "#FE5F42"]}
							>
								<Text style={styles.textButton}>Editar</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>

					<View style={styles.buttonInfoContainer}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Ionicons name={"time-outline"} color={"black"} size={22} />
							<Text style={styles.textCard}>
								{convertTime(auctionData?.market?.finishDate)}
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

			{visibleEdit && (
				<EditBid
					setVisible={setVisibleEdit}
					visible={visibleEdit}
					auctionData={auctionData}
				/>
			)}

			{visibleBuy && (
				<DirectBuy
					setVisible={setVisibleBuy}
					visible={visibleBuy}
					auctionData={auctionData}
				/>
			)}
		</>
	);
}
