import axios from "axios";
import Constants from "expo-constants";

const BASE_URL = Constants.expoConfig.extra.apiUrl;

export const joinGame = async (token, eventId) => {

  try {
    console.log(`${BASE_URL}/public-events/${eventId}/join-game`)
    const data = await axios.post(
      `${BASE_URL}/public-events/${eventId}/join-game`,{},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return data.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};

/* export const joinGame = async (token, eventId) => {
  console.log(
    "dentro de join",
    token,
    eventId,
    `${BASE_URL}/public-events/${eventId}/join-game`
  );
  try {
    const data = await axios.post(
      `${BASE_URL}/public-events/${eventId}/join-game`,{},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log("data join ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}; */

/* export const joinGame = async (token, eventId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/public-events/${eventId}/join-game`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (!data) {
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
}; */

export const fetchEventsList = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/public-events`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!data) {
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

export const fetchEventInfo = async (token, eventId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/public-events/${eventId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

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
