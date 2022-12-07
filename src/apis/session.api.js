import axiosInstance from '../configs/AxiosInstance';

const sessionAPI = {
  async getAllSession() {
    try {
      const res = await axiosInstance.get('/v1/session/');
      return res;
    } catch (err) {
      console.log(err);
    }
  },
  async addSession(data) {
    try {
      const res = await axiosInstance.post('/v1/session/', data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default sessionAPI;
