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
        console.log(newAddress, accessToken, accountId);
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
};
