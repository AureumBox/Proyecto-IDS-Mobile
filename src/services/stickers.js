import axios from "axios";
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_STICKERS_OBTAIN = `${BASE_URL}/stickers/obtain`;

export const obtainStickers = async () => {
    try {
        const { data } = await axios.get(URL_STICKERS_OBTAIN)
        console.log('DATA stickers', data, '---', data.stickers);

        if (!data.stickers || !data.success) {
            throw new Error("No se han recibido bien los datos del servidor :(");
        }

        return data.stickers;
    } catch (error) {
        if (error.response) {
            throw new Error(error?.response?.data?.message || "Error desconocido del servidor");
        }
        throw error;
    }
}