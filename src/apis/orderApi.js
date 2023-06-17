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

    requestCreateOrderMomo(params) {
        return axiosClient
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
    requestCreateOrderVN_Pay(params) {
        return axiosClient
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

    requestUpdateStatusByCode(orderRequest, accessToken) {
        return axiosClient
            .post(
                "/orders/payment/momo/success",
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
