import { toast } from 'react-toastify';
import axiosInstance from '../configs/AxiosInstance';

const bookingAPI = {
  async getBooking() {
    try {
      const res = await axiosInstance.get('/v1/booking/');
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async createBooking(data) {
    try {
      const res = await axiosInstance
        .post('/v1/booking/', data)
        .then(
          (res) =>
            res.data.code === 200 &&
            toast.success('Booking berhasil ditambahkan!')
        );
      return res;
    } catch (err) {
      console.log(err);
      toast.warn(`${err.response.data.message}`);
    }
  },

  async getBookingByID(id) {
    try {
      const res = await axiosInstance.get(`/v1/booking/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async deleteBooking(id) {
    try {
      const res = await axiosInstance.delete(`/v1/booking/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async updateBooking(data) {
    const id = data.id;
    try {
      const res = await axiosInstance.put(`/v1/booking/${id}`, data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default bookingAPI;
