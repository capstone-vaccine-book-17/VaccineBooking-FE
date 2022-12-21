import axiosInstance from '../configs/AxiosInstance';

const profileAPI = {
  async getProfile() {
    try {
      const res = await axiosInstance.get('/v1/profile/');
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async updateProfile(data) {
    try {
      const res = await axiosInstance.put('/v1/profile/update', data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default profileAPI;
