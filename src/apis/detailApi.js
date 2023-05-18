import axios from "./axios";
export const detailApi = {
    async requestGetDetail(params) {
        return await axios
            .get(`/details/${params.size_id}/product/${params.slug}/${params.color_id}`)
            .then((response) => response)
            .catch((err) => err.response.data);
    },
};
