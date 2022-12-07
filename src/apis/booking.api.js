import axiosInstance from "../configs/AxiosInstance";

const bookingAPI = {
  async getBooking() {
    try {
      const res = await axiosInstance.get("/v1/booking/");
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async createBooking(data) {
    try {
      const res = await axiosInstance.post("/v1/booking/", data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  // async deleteBooking(data){
  //   try {
  //     const res = await axiosInstance.delete("", id);
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async updateBooking(id) {
  //   try {
  //     const res = await axiosInstance.put("/v1/profile/update", id);
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};

export default bookingAPI;
