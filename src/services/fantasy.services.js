import axios from "axios";
import Constants from "expo-constants";

const BASE_URL = Constants.expoConfig.extra.apiUrl;

export const fetchBench = async (
  token,
  eventId,
  playerName,
  team,
  position,
  page
) => {
  let queryString = "";

  if (playerName) queryString += `&playername=${playerName}`;
  if (team) queryString += `&teamname=${team}`;
  if (position) queryString += `&position=${position}`;
  if (page) queryString += `&page=${page}`;

  // console.log(`${BASE_URL}/public-events/${eventId}/squad?${queryString}`);

  try {
    const { data } = await axios.get(
      `${BASE_URL}/public-events/${eventId}/squad?${queryString}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // console.log("DATA bench", JSON.stringify(data), "---");

    if (!data.items || !data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};

export const fetchSquad = async (token, eventId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}public-events/${eventId}/squad/players`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("DATA squad", data, "---");

    if (!data.item || !data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return data.item;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};

export const insertPlayer = async (token, eventId, player) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/public-events/${eventId}/squad/player`,
      {
        playerId: player.id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log(data);

    if (!data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};

export const removePlayer = async (token, eventId, playerId) => {
  console.log("borranding", token, eventId, playerId);
  console.log(`${BASE_URL}/public-events/${eventId}/squad/player/${playerId}`);
  try {
    const { data } = await axios.delete(
      `${BASE_URL}/public-events/${eventId}/squad/player/${playerId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("DATA delete", data, "---");

    if (!data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};
