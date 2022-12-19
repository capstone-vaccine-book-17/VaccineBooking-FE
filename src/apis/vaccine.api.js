import axiosInstance from '../configs/AxiosInstance';

const vaccineAPI = {
  async getAllVaccine() {
    try {
      const res = await axiosInstance.get('/v1/vaccine/view');
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async getVaccineByID(id) {
    try {
      const res = await axiosInstance.get(`/v1/vaccine/view/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async addVaccine(data) {
    try {
      const res = await axiosInstance.post('/v1/vaccine/create', data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async deleteVaccine(id) {
    try {
      const res = await axiosInstance.delete(`/v1/vaccine/delete/${id}`);
      return res;
    } catch (err) {
      console.log(err);
    }
  },

  async updateVaccine(data) {
    const id = data.id;
    try {
      const res = await axiosInstance.put(`/v1/vaccine/update/${id}`, data);
      return res;
    } catch (err) {
      console.log(err);
    }
  },
};

export default vaccineAPI;
