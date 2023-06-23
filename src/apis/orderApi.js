import axiosClient from "./axios";
export const orderApi = {
    async requestCreateOrder(params) {
        return await axiosClient
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

    async requestCreateOrderMomo(params) {
        return await axiosClient
            .post(
                `/orders/payment/momo`,
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
    async requestCreateOrderVN_Pay(params) {
        return await axiosClient
            .post(
                `/orders/payment/vn-pay`,
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

    async requestUpdateStatusByCode(orderRequest, accessToken) {
        return await axiosClient
            .post(
                "/orders/payment/success",
                {
                    id: orderRequest.orderId,
                    status: {
                        code: orderRequest.code,
                    },
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
    async requestGetOrders(accountId, accessToken) {
        return await axiosClient
            .get(`orders/account/${accountId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestGetOrder(id, accessToken) {
        return await axiosClient
            .get(`orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
