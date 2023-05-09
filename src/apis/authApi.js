import axios from "./axios";

export const authApi = {
    async requestRegister(params) {
        return await axios
            .post("/accounts/register", {
                username: params.username,
                email: params.email,
                password: params.password,
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestVerifyAccount(params) {
        const token = params.token;
        return await axios
            .get(`/accounts/verify/${token}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestLogin(params) {
        return await axios
            .post("/accounts/login", {
                username: params.username,
                password: params.password,
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestGetProfile(params) {
        return await axios
            .get(`/accounts/profile/${params.accountId}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
    async requestUpdateProfile(customerInfo, accessToken) {
        return await axios
            .put(
                `/accounts/profile`,
                {
                    accountId: customerInfo.accountId,
                    firstName: customerInfo.firstName,
                    lastName: customerInfo.lastName,
                    birthday: customerInfo.birthday,
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
