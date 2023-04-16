import axios from "./axios";

export const categoryApi = {
    async requestGetParentCategory() {
        return await axios
            .get("/categories/parent")
            .then((response) => response)
            .catch((err) => err.response.data);
    },
    async requestCategoryBySlug(params) {
        return await axios
            .get(`/categories/slug/${params.slug}`)
            .then((response) => response)
            .catch((err) => err.response.data);
    },
};
