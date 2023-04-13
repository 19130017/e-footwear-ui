import axios from "./axios";

export const categoryApi = {
    async fetchGetParentCategory() {
        return await axios
            .get("/categories/parent")
            .then((response) => response)
            .catch((err) => err.response.data);
    },
    async fetchGetChildrenCategory(id) {

        return await axios
            .get(`/categories/parent/${id}`)
            .then((response) => response)
            .catch((err) => err.response.data);
    },
};
