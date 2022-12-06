import axiosInstance from '../configs/AxiosInstance';

const dashboardAPI = {
  async getDashboards() {
    try {
      const res = await axiosInstance.get('/v1/');
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default dashboardAPI;
