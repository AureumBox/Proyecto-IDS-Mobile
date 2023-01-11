import axios from "axios";
import Constants from "expo-constants";

const BASE_URL = `${Constants.expoConfig.extra.apiUrl}/public-events/`;

export const fetchAuctionsList = async (
  token,
  eventId,
  playerName,
  team,
  position,
  myAuction,
  page
) => {
  let queryString = "";

  if (playerName) queryString += `&playername=${playerName}`;
  if (team) queryString += `&teamname=${team}`;
  if (position) queryString += `&position=${position}`;
  if (page) queryString += `&page=${page}`;

  console.log(`${BASE_URL}${eventId}/market?${queryString}`);
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
    console.log(data);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const fetchMyBidsList = async (token, eventId, page) => {
  let queryString = "";
  if (page) queryString += `&page=${page}`;

  console.log(`${BASE_URL}${eventId}/market/myBids?${queryString}`);
  try {
    const { data } = await axios.get(
      `${BASE_URL}${eventId}/market/myBids?${queryString}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(data);
    if (!data?.success) throw new Error(data?.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const fetchAuctionInfo = (token, eventId, auctionId) => {
  try {
    const { data } = axios.get(BASE_URL + eventId + "/market/" + auctionId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (e) {
    throw new Error(
      e?.response?.data?.message || e?.message || "Error Desconocido"
    );
  }
};

export const addAuction = (token, eventId) => {
  try {
    const { data } = axios.post(
      BASE_URL + eventId + "/market/add",
      {
        /* TODO */
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

export const addBid = (token, eventId) => {
  try {
    const { data } = axios.post(
      BASE_URL + eventId + "/market/bid",
      {
        /* TODO */
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

export const updateBid = (token, eventId, bidId) => {
  try {
    const { data } = axios.put(
      BASE_URL + eventId + "/market/update/" + bidId,
      {
        /* TODO */
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
