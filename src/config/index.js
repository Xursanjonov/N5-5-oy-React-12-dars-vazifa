import axios from "axios";

const axiosUrl = axios.create({
  baseURL: "https://6645c029b8925626f89301d2.mockapi.io/nusratilloh",
});

export const axiosToken = axios.create({ baseURL: "https://dummyjson.com/" });

export default axiosUrl;
