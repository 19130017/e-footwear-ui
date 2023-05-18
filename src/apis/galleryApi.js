import axiosClient from "./axios";
export const galleryApi = {
    async requestGetCarousels() {
        return axiosClient
            .get(`/galleries/slide`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetBanners() {
        return axiosClient
            .get(`/galleries/banner`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestGetCollections() {
        return axiosClient
            .get(`/galleries/collection`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetAds() {
        return axiosClient
            .get(`/galleries/ads`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetFooter() {
        return axiosClient
            .get(`/galleries/footer`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
