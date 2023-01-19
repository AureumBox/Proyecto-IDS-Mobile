import axios from "axios";
import Constants from "expo-constants";

const BASE_URL = `${Constants.expoConfig.extra.apiUrl}/public-events/`;

export const fetchAuctionsList = async (
	token,
	eventId,
	playerName,
	team,
	position,
	page = 0
) => {
	let queryString = "";
	if (playerName) queryString += `&playerName=${playerName}`;
	if (team) queryString += `&teamId=${team}`;
	if (position) queryString += `&position=${position}`;
	if (page) queryString += `&page=${page}`;

	try {
		const { data } = await axios.get(
			`${BASE_URL}${eventId}/market?${queryString}`,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
		if (!data?.success) throw new Error(data?.message);
		return data;
	} catch (e) {
		throw new Error(
			e?.response?.data?.message || e?.message || "Error Desconocido"
		);
	}
};


export const fetchMyAuctionsList = async (
	token,
	eventId,
	teamId,
	position,
	playerName,
	page = 0
) => {
	try {
		let queryString = "";
		if (teamId) queryString += `&teamId=${teamId}`;
		if (position) queryString += `&position=${position}`;
		if (playerName) queryString += `&playername=${playerName}`;

		const { data } = await axios.get(
			`${BASE_URL}${eventId}/market?myAuction=true&page=${page}${queryString}`,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);

		if (!data?.success) throw new Error(data?.message);
		return data;
	} catch (e) {
		throw new Error(
			e?.response?.data?.message || e?.message || "Error Desconocido"
		);
	}
};

export const fetchMyBidsList = async (token, eventId, page = 0) => {
	let queryString = "";
	if (page) queryString += `&page=${page}`;

	try {
		const { data } = await axios.get(
			`${BASE_URL}${eventId}/market/myBids?${queryString}`,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);

		if (!data?.success) throw new Error(data?.message);
		return data;
	} catch (e) {
		throw new Error(
			e?.response?.data?.message || e?.message || "Error Desconocido"
		);
	}
};

export const fetchAuctionInfo = async (token, eventId, auctionId) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}${eventId}/market/${auctionId}`,
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
		if (!data?.success) throw new Error(data?.message);
		return data;
	} catch (e) {
		throw new Error(
			e?.response?.data?.message || e?.message || "Error Desconocido"
		);
	}
};

export const postAuction = async (
	token,
	eventId,
	initialValue,
	directPurchase,
	playerId
) => {
	try {
		const { data } = await axios.post(
			BASE_URL + eventId + "/market/add",
			{
				initialValue,
				directPurchase,
				eventId,
				playerId,
			},
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
		return data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || "Error Desconocido");
	}
};

export const postBid = async (
	token,
	eventId,
	bid,
	marketId,
	isDirectPurchase
) => {
	try {
		console.log(bid)
		const { data } = await axios.post(
			`${BASE_URL}${eventId}/market/bid`,
			{
				value: bid,
				marketId: marketId,
				isDirectPurchase: isDirectPurchase,
			},
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
		console.log(data)
		return data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || "Error Desconocido");
	}
};

export const updateBid = async (token, eventId, marketId, value, bidId) => {
	try {
		const { data } = await axios.put(
			BASE_URL + eventId + "/market/update/" + bidId,
			{
				value: value,
				marketId: marketId,
				isDirectPurchase: false,
			},
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);
		return data;
	} catch (e) {
		throw new Error(e?.response?.data?.message || "Error Desconocido");
	}
};
