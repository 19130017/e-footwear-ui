import axiosClient from "./axios";
export const orderApi = {
    requestCreateOrder(params) {
        return axiosClient
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
        return axiosClient
            .get(`orders/account/${accountId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    requestGetOrder(id, accessToken) {
        return axiosClient
            .get(`orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
