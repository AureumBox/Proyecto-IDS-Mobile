import axios from "axios";
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_LOGIN = `${BASE_URL}/login`;
const URL_SIGNUP = `${BASE_URL}/register`;

export const login = async (user) => {
  try {
    const result = await axios.post(URL_LOGIN, user);
    return result;
  } catch (error) {
    console.log("Error login", error);
  }
}

export const signup = async (user) => {
  try {
    const result = await axios.post(URL_SIGNUP, user);
    return result;
  } catch (error) {
    console.log("Error signup", error);
  }
}

/*Hello ily :>*/
/*Hi >-<*/
