import axios from "axios";
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_WATCH_AD = `${BASE_URL}/promotions/watch`;
const URL_WATCH_DETAILED_AD = `${BASE_URL}/promotions/watch-detailed/{adId}`;

export const watchAd = async (token) => {
  try {
    const { data } = await axios.get(URL_WATCH_AD, {
      headers: { Authorization: `Bearer ${token}` },
    });
		
    if (!data.item || !data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }
    return data.item;
  } catch (error) {
    if (error.response) {
      throw new Error(error?.response?.data?.message || "Error desconocido del servidor");
    }

    throw error;
  }
}

export const getAdRedirectUrl = (adId) => {
  return URL_WATCH_DETAILED_AD.replace('{adId}', adId);
}
