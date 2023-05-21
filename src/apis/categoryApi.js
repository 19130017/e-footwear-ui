import axiosClient from "./axios";

export const categoryApi = {
    async requestGetParentCategory() {
        return await axiosClient
            .get("/categories/parent")
            .then((response) => response)
            .catch((err) => err.response.data);
    },
    async requestCategoryBySlug(params) {
        return await axiosClient
            .get(`/categories/slug/${params.slug}`)
            .then((response) => response)
            .catch((err) => err.response.data);
    },
};
