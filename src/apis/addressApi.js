import axios from "./axios";
export const addressApi = {
    async requestGetAddresses(params) {
        return await axios
            .get(`/addresses?accountId=${params.accountId}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestCreateAddress(newAddress, accessToken, accountId) {
        return await axios
            .post(
                `/addresses?accountId=${accountId}`,
                {
                    ...newAddress,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestUpdateAddress(newAddress, accessToken, accountId) {
        console.log(newAddress, accessToken, accountId);
        return await axios
            .put(
                `/addresses?accountId=${accountId}`,
                {
                    ...newAddress,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetAddress(params) {
        return await axios
            .get(`/addresses/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestDeleteAddress(params) {
        return await axios
            .delete(`/addresses/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
