import axiosClient from "./axios";
export const addressApi = {
    async requestGetAddresses(params) {
        return await axiosClient
            .get(`/addresses?accountId=${params.accountId}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestCreateAddress(newAddress, accessToken, accountId) {
        return await axiosClient
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
        return await axiosClient
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
        return await axiosClient
            .get(`/addresses/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestDeleteAddress(params) {
        return await axiosClient
            .delete(`/addresses/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
