import axios from "./axios";
export const orderApi = {
    requestCreateOrder(params) {
        return axios
            .post(
                `/orders`,
                {
                    cost: params.cost,
                    transportFee: params.transportFee,
                    description: params.description,
                    coupon: params.coupon,
                    account: params.account,
                    address: params.address,
                    items: [...params.items],
                },
                {
                    headers: {
                        Authorization: `Bearer ${params.accessToken}`,
                    },
                }
            )
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    requestGetOrders(accountId, accessToken) {
        return axios
            .get(`orders/account/${accountId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    requestGetOrder(id, accessToken) {
        return axios
            .get(`orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
