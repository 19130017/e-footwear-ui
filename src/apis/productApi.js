import axiosClient from "./axios";
export const productApi = {
    async requestAllProductByCateSlug(params) {
        return await axiosClient
            .get(`/products/category/slug/${params.slug}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProduct(params) {
        return await axiosClient
            .get(`/products/slug/${params.slug}/color/${params.color_id}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProductBySlug(params) {
        return await axiosClient
            .get(`/products/slug/${params.slug}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetAllProducts() {
        return await axiosClient
            .get("/products")
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProductHot() {
        return await axiosClient
            .get("/products/hot")
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProductNew() {
        return await axiosClient
            .get("/products/new")
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestGetProductByName(params) {
        return await axiosClient
            .get(`/products/search?query=${params}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
