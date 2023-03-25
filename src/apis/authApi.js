import axios from "./axios";

export const authApi = {
    async requestRegister(params) {
        return await axios
            .post("/user/register", {
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
            .get(`user/verify/${token}`)
            .then((response) => response)
            .catch((error) => error.response.data);
    },

    async requestLogin(params) {
        return await axios
            .post("/user/login", {
                username: params.username,
                email: params.username,
                password: params.password,
            })
            .then((response) => response)
            .catch((error) => error.response.data);
    },
};
