import axios from "./axios";
export const galleryApi = {
    async requestGetGalleriesByType(params) {
        return axios
            .get(`/galleries/type/${params}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
