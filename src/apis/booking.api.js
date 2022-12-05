import axiosInstance from "../configs/AxiosInstance";

const bookingAPI = {
  async booking(data) {
    try {
      const res = await axiosInstance.post("/v1/booking/", data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default bookingAPI;
