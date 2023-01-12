import axios from "axios";
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;

export const obtainStickers = async (token, eventId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/stickers/obtain/${eventId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    if (!data.items || !data.success) {
      throw new Error(data.message || "No se han recibido bien los datos del servidor :(");
    }

    return data.items;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};

export const fetchStickerStatus = async (token, eventId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/stickers/get-diary-status/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    /* if (!data.success) {
      throw new Error(data.message || "No se han recibido bien los datos del servidor :(");
    } */

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
