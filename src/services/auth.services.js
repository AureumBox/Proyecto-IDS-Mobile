import axios from "axios";
import Constants from "expo-constants";

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
};

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
};


export const forgotPasswordEmail = async (email) => {
  try {
    const { data } = await axios.put(
      `${BASE_URL}/auth/forgot-password`,
      {
        email: email,
      }
    );
    return data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || "Error desconocido del servidor"
    );
  }
};

export const forgotPasswordNew = async (password) => {
  try {
    const result = await axios.put(`${BASE_URL}/new-password`, {
      password: password,
    });

    console.log(result);

    if (!data.success) {
      throw new Error("No se han recibido bien los datos del servidor :(");
    }

    return result;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || "Error desconocido del servidor"
    );
  }
};

export const forgotPasswordCode = async (code) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/code`, {
      code: code,
    });
    return data;
  } catch (error) {
    throw new Error(
      error?.response?.data?.message || "Error desconocido del servidor"
    );
  }
};
