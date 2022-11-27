import axios from "axios";
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_WATCH_AD = `${BASE_URL}/ads/watch`;

export const watchAd = async () => {
  try {
    const { data } = await axios.get(URL_WATCH_AD);
    console.log('DATA ad', data, '---', data.ad);

    if (!data.ad || !data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return data.ad;
  } catch (error) {
    if (error.response) {
      throw new Error(error?.response?.data?.message || "Error desconocido del servidor");
    }

    throw error;
  }
}
