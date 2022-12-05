import axios from "axios";
import Cookies from "js-cookie";
import { CONST } from "../utils/constants";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: Baerer ${Cookies.get('token')},
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((axiosConfig) => {
  const httpConfig = { ...axiosConfig };
  const token = Cookies.get("token");
  if (token) {
    httpConfig.headers.Authorization = `Bearer ${Cookies.get("token")}`;
  }
  return httpConfig;
});

export default axiosInstance;
