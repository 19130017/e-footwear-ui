import axios from "./axios";
export const galleryApi = {
    async requestGetCarousels() {
        return axios
            .get(`/galleries/slide`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetBanners() {
        return axios
            .get(`/galleries/banner`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestGetCollections() {
        return axios
            .get(`/galleries/collection`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetAds() {
        return axios
            .get(`/galleries/ads`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetFooter() {
        return axios
            .get(`/galleries/footer`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
