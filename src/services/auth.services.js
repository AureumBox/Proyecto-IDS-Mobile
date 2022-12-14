import axios from 'axios';
import Constants from 'expo-constants';

const BASE_URL = Constants.expoConfig.extra.apiUrl;
const URL_LOGIN = `${BASE_URL}/auth/login`;
const URL_SIGNUP = `${BASE_URL}/auth/register`;

export const login = async (user) => {
  try {
    const result = await axios.post(URL_LOGIN, user);
    return result;
  } catch (error) {
    throw error;
  }
}

export const signup = async (user) => {
  try {
    const result = await axios.post(URL_SIGNUP, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return result;
  } catch (error) {
    throw error;
  }
}
