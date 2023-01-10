import React, { useEffect, useState, useCallback } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";
import AlbumHeader from "./AlbumHeader";
import NoStickerSlot from "./NoStickerSlot";
import SelectTeamModal from "./selectTeamModal";
import StickerTemplate from "../../components/StickerTemplate";
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

export default function AlbumPage() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const [pageInfo, setPageInfo] = useState([]);
	const [showAlbum, setShowAlbum] = useState(false);
	const [eventId, setEventId] = useState(1);
	const [change, setChange] = useState(false);
	const [teamsModalOpens, setTeamsModalOpens] = useState(false);

	const { token } = useSelector((state) => state.auth);
	const teamName = useSelector((state) => state.album.currentTeam.name);
	const teamList = useSelector((state) => state.album.teamList);
	const index = useSelector((state) => state.album.currentTeam.index);
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
	}, [token, eventId, change]);

	useEffect(() => {
		loadAlbumInfo();
	}, [loadAlbumInfo]);

	const loadPageInfo = async () => {
		setLoading(true);
		try {
			dispatch(
				setCurrentTeam({
					id: teamList[index].id,
					name: teamList[index].name,
					obtainedCount: teamList[index].stickers.length,
				})
			);
			const teamId = teamList[index].id;

			const data = await fetchPageInfo(token, eventId, teamId);
			setPageInfo(data.item.stickers);
			dispatch(setStickers(data.item.stickers));
			setShowAlbum(true);
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			await loadPageInfo();
			setChange(false);
		})();
	}, [token, index, change]);

	async function putSticker(idSlot = 0) {
		if (stickerSelected == 0) {
			return 0;
		}
		try {
			if (idSlot != stickerSelected) {
				throw new Error("Esta no es la casilla del sticker");
			}
			const data = await claimSticker(token, eventId, stickerSelected);
			dispatch(setIdStickerSelected(0));
			setChange(true);
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<View style={styles.fondo}>
			<Spinner visible={loading} textContent={"Cargando..."} />

			{/* mostrar seleccion de equipo */}
			<SelectTeamModal
				isVisible={teamsModalOpens}
				onClose={() => {
					setTeamsModalOpens(false);
				}}
			/>
			<View style={styles.container}>
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
													<StickerTemplate key={i} sticker={sticker} onModal={false} />
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
