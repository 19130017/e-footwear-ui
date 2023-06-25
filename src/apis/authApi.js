import axiosClient from "./axios";

export const authApi = {
    async requestRegister(params) {
        return await axiosClient
            .post("/accounts/register", {
                username: params.username,
                email: params.email,
                password: params.password,
            })
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },

    async requestVerifyAccount(params) {
        const token = params.token;
        return await axiosClient
            .get(`/accounts/verify/${token}`)
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },

    async requestLogin(params) {
        return await axiosClient
            .post("/accounts/login", {
                username: params.username,
                password: params.password,
            })
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },
    async requestLoginGG(params) {
        return await axiosClient
            .post("/accounts/login/google", params)
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },
    async requestLoginFB(params) {
        return await axiosClient
            .post("/accounts/login/facebook", params)
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },

    async requestGetProfile(params) {
        return await axiosClient
            .get(`/accounts/profile/${params.accountId}`, {
                headers: {
                    Authorization: `Bearer ${params.accessToken}`,
                },
            })
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },
    async requestUpdateProfile(customerInfo, accessToken) {
        return await axiosClient
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
            .catch((error) => error?.response?.data || error);
    },

    async requestChangePassword(params) {
        return await axiosClient
            .put(
                "/accounts/change-password",
                {
                    id: params.id,
                    newPassword: params.newPassword,
                    oldPassword: params.oldPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${params.accessToken}`,
                    },
                }
            )
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },

    async requestResetPassword(params) {
        return await axiosClient
            .put(`/accounts/reset-password`, {
                token: params.token,
                newPassword: params.newPassword,
            })
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },
    async requestForgotPassword(params) {
        return await axiosClient
            .post(`/accounts/forgot-password?email=${params.email}`)
            .then((response) => response)
            .catch((error) => error?.response?.data || error);
    },

    async requestUploadAvatar(params, accessToken) {
        return await axiosClient.post("/accounts/upload-avatar", params, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
            },
        });
    },
};
