import axios from "axios";
import { CONST } from "../utils/constants";
import Cookies from "js-cookie";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Baerer ${Cookies.get("token")}`,
  },
};

export const axiosInstance = axios.create(config);
