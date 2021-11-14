import axios from "axios";

const loginClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const login = async (user) => {
  const response = await loginClient.post("/user/login", user);
  return response.data;
};

const signup = async (user) => {
  const response = await loginClient.post("/user/create", user);
  return response.data;
};

export default {
  login,
  signup,
};
