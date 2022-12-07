import axios from "axios";
import Constants from "expo-constants";

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_STICKERS_OBTAIN = `${BASE_URL}/stickers/obtain/1`; //numero depende del id del evento

export const obtainStickers = async (token) => {
  try {
    const { data } = await axios.get(URL_STICKERS_OBTAIN, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('DATA stickers', data, '---', data.stickers);

    if (!data.stickers || !data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return data.stickers;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error?.response?.data?.message || "Error desconocido del servidor"
      );
    }
    throw error;
  }
};
