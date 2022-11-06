import axios from "axios";

const BASE_URL = "http://localhost:3000/users";
const URL_LOGIN = "http://localhost:3000/login";
const URL_SIGNUP = "http://localhost:3000/register";

//Deprecated
export const getAll = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log("Error getAll: "+error);
  }
  
}

//Deprecated
export const createUser = async (user) => {
  try {
    const res = await axios.post(BASE_URL, user);
    return res.data;
  } catch (error) {
    console.log("Error createUser: "+error);
  }
}

export const login = async (user) => {
  try {
    const res = await axios.post(URL_LOGIN, user);
  } catch (error) {
    console.log("Error login: "+error);
  }
}

export const signup = async (user) => {
  try {
    const res = await axios.post(URL_SIGNUP, user);
  } catch (error) {
    console.log("Error signup: "+error);
  }
}
/*Hello ily :>*/