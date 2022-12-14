import axios from "axios";
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_STICKERS_OBTAIN = `${BASE_URL}/stickers/obtain/1`; //numero depende del id del evento

export const obtainStickers = async (token) => {
  try {
    const { data } = await axios.get(URL_STICKERS_OBTAIN, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!data.items || !data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
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
