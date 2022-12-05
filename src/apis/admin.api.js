import { axiosInstance } from "../configs/axiosInstance";

const adminAPI = {
  async login(data) {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default adminAPI;
