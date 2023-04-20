import axios from "./axios";
export const productApi = {
    async requestAllProductByCateSlug(params) {
        return await axios
            .get(`/products/category/slug/${params.slug}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProduct(params) {
        return await axios
            .get(`/products/slug/${params.slug}/color/${params.color_id}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProductBySlug(params) {
        return await axios
            .get(`/products/slug/${params.slug}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetAllProducts() {
        return await axios
            .get("/products")
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProductHot() {
        return await axios
            .get("/products/hot")
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetProductNew() {
        return await axios
            .get("/products/new")
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
