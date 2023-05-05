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
                email: params.email,
                password: params.password,
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
