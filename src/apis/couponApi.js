import axiosClient from "./axios";
export const couponApi = {
    async requestGetCoupons() {
        return await axiosClient
            .get("/coupons")
            .then((response) => response)
            .catch((err) => err.response.data);
    },
};
