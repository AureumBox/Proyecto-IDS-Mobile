import axios from "axios";

const BASE_URL = "http://localhost:3000/api/users";

export const getAll = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
}

export const createUser = async (user) => {
  const res = await axios.post(BASE_URL, user);
  return res.data;
}

/*Hello ily :>*/