import axios from "./axios";
export const productApi = {
    async requestAllProductByCateSlug(params) {
        return await axios
            .get(`/products/category/slug/${params.slug}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
