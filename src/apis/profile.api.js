import axiosInstance from "../configs/AxiosInstance";

const profileAPI = {
    async profile() {
        try {
            const res = await axiosInstance.get("/v1/profile/");
            return res;
        } catch(err) {
            console.log(err);
        }
    },
};

export default profileAPI;