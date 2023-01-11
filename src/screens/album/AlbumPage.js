import React, { useEffect, useState, useCallback } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import { AntDesign } from '@expo/vector-icons';

import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";
import AlbumHeader from "./AlbumHeader";
import NoStickerSlot from "./NoStickerSlot";
import SelectTeamModal from "./selectTeamModal";
import StickerTemplate from "../../components/StickerTemplate";
import infoAlbum from '../../../assets/app/helpAlbum'
import styles from "./styles";
import {
	setCurrentTeam,
	setStickers,
	setIdStickerSelected,
	setPercentage,
} from "../../state/albumSlice";
import {
	fetchPageInfo,
	claimSticker,
	fetchAlbumInfo,
} from "../../services/inventory.services";
import HelpSlider from "../../components/helpSlider/HelpSlider";

export default function AlbumPage() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const [pageInfo, setPageInfo] = useState([]);
	const [showAlbum, setShowAlbum] = useState(false);
	const [eventId, setEventId] = useState(1);
	const [teamsModalOpens, setTeamsModalOpens] = useState(false);
	const [helpAlbum, setHelpAlbum] = useState(false);

	const { token } = useSelector((state) => state.auth);
	const teamName = useSelector((state) => state.album.currentTeam.name);
	const teamList = useSelector((state) => state.album.teamList);
	const teamIndex = useSelector((state) => state.album.currentTeam.index);
	const stickerSelected = useSelector((state) => state.album.idStickerSelected);
	const currentPage = useSelector(
		(state) => state.album.currentTeam.currentPage
	);

	const STICKER_PER_PAGE = 6;
	let indexStart = STICKER_PER_PAGE * currentPage;
	let indexEnd = indexStart + STICKER_PER_PAGE;

	// PARA OBTENER LA INFORMACION DEL ALBUM
	const loadAlbumInfo = useCallback(async () => {
		//percentage
		setLoading(true);
		try {
			const data = await fetchAlbumInfo(token, eventId);
			dispatch(setPercentage(data.actualProgressPercentage));
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [token, eventId]);

	const loadPageInfo = useCallback(async () => {
		setLoading(true);
		try {
			dispatch(
				setCurrentTeam({
					id: teamList[teamIndex].id,
					name: teamList[teamIndex].name,
					obtainedCount: teamList[teamIndex].stickers.length,
				})
			);
			const teamId = teamList[teamIndex].id;

			const data = await fetchPageInfo(token, eventId, teamId);
			setPageInfo(data.item.stickers);
			dispatch(setStickers(data.item.stickers));
			setShowAlbum(true);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}, [token, eventId, teamIndex]);

	useEffect(() => {
		loadAlbumInfo();
		loadPageInfo();
	}, [loadAlbumInfo, loadPageInfo]);

	async function putSticker(idSlot = 0) {
		if (stickerSelected == 0) {
			return 0;
		}

		try {
			if (idSlot != stickerSelected) {
				throw new Error("Esta no es la casilla del sticker");
			}
			setLoading(true);
			const data = await claimSticker(token, eventId, stickerSelected);
			dispatch(setIdStickerSelected(0));
			await loadAlbumInfo();
			await loadPageInfo();
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.fondo}>
			<Spinner
				visible={loading}
				size='large'
				color='#E7484D'
				overlayColor='#FFFFFF50'
			/>

			<HelpSlider 
				isVisible={helpAlbum}
				onClose={() => {
					setHelpAlbum(false)
				}}
				sliderContent={infoAlbum}
			/>
			{/* mostrar seleccion de equipo */}
			<SelectTeamModal
				isVisible={teamsModalOpens}
				onClose={() => {
					setTeamsModalOpens(false);
				}}
			/>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => setHelpAlbum(true)}
					style={styles.helpButton}
				>
					<AntDesign name="questioncircle" size={35} color="#E7484D" />
				</TouchableOpacity>
				<ProgressBar />
				{/* Pagina de album */}
				<View style={styles.albumfondo}>
					<AlbumHeader setFilter={setTeamsModalOpens} teamName={teamName} />
					<View style={styles.containerBarajitas}>
						<ScrollView>
							<View
								style={{
									justifyContent: "center",
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
								{/* stickers del equipo */}
								{pageInfo
									?.slice(indexStart - 6, indexEnd - 6)
									.map((sticker, i) => (
										<View key={i}>
											<View style={{ margin: 1, marginVertical: 3 }}>
												{!sticker?.isAttached && (
													<TouchableOpacity
														key={i}
														onPress={() => putSticker(sticker?.id)}
													>
														<NoStickerSlot
															key={i}
															idCode={sticker?.jerseyNumber}
															nameCode={sticker?.playerName}
														/>
													</TouchableOpacity>
												)}
												{sticker?.isAttached && (
													<StickerTemplate key={i} sticker={sticker} />
												)}
											</View>
										</View>
									))}
							</View>
						</ScrollView>
					</View>
				</View>
				<Carousel />
			</View>
		</View>
	);
}
