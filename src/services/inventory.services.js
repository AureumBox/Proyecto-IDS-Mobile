import axios from "axios";
import Constants from "expo-constants";

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_INV = `${BASE_URL}/inventory`;

export const fetchAlbumInfo = async (token, eventId) => {
  // console.log(URL_INV + `/public-events/${eventId}/album`)
  const { data } = await axios.get(
    URL_INV + `/public-events/${eventId}/album`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  ); /* 
  console.log("mira album" + JSON.stringify(data)); */
  return data;
};

export const fetchPageInfo = async (token, eventId, teamId) => {
  const { data } = await axios.get(
    `${URL_INV}/public-events/${eventId}/album/${teamId}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  // console.log("mira stupido" + JSON.stringify(data));
  return data;
};

export const fetchTeamsInfo = async (token, eventId) => {
  try{
    const { data } = await axios.get(`${BASE_URL}/teams/all/${eventId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(data);
  return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchInventory = async (token, eventId, page) => {
  try {
    const { data } = await axios.get(
      URL_INV + "/public-events/" + eventId + "?size=5&page=" + page,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchCarousel = async (token, eventId) => {
  try {
    const { data } = await axios.get(`${URL_INV}/public-events/${eventId}/carousel`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const claimSticker = async (token, eventId, stickerId) => {
  try {
    const { data } = await axios.post(
      `${URL_INV}/public-events/${eventId}/claim-sticker`,
      {
        stickerId: stickerId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};