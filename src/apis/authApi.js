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
};