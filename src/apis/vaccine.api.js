import  axiosInstance  from "../configs/AxiosInstance";


const vaccineAPI = {
    async getAllVaccine(){
        try{
            const res = await axiosInstance.get("/v1/vaccine/view");
            return res;
        }   catch (err){
            console.log(err);
        }
    },
    async addVaccine(data) {
        try {
          const res = await axiosInstance.post("/v1/vaccine/create", data);
          return res;
        } catch (err) {
          console.log(err);
        }
      },
    };



export default vaccineAPI;