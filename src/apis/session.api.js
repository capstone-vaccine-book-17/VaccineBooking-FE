import { axiosInstance } from "../configs/axiosInstance";

const sessionAPI = {
  async getAllSession() {
    try {
      const res = await axiosInstance.get("/v1/session/");
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default sessionAPI;
