import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";
import { AUTH_LOGIN, AUTH_REGISTER, AUTH_VERIFY_ACCOUNT } from "./authType";
const initialState = {
    userId: "",
    accessToken: "",
    refreshToken: "",
    isLogined: false,
    isLoading: false,
    response: "",
};

const fetchRegister = createAsyncThunk(AUTH_REGISTER, async (params, thunkApi) => {
    try {
        const response = await authApi.requestRegister(params);
        return response.status === 200
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchVerifyAccount = createAsyncThunk(AUTH_VERIFY_ACCOUNT, async (params, thunkApi) => {
    try {
        const response = await authApi.requestVerifyAccount(params);
        return response.status === 200
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchLogin = createAsyncThunk(AUTH_LOGIN, async (params, thunkApi) => {
    try {
        const response = await authApi.requestLogin(params);
        return response.status === 200
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // register
            .addCase(fetchRegister.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: data.message,
                });
                return state;
            })
            // verify
            .addCase(fetchVerifyAccount.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchVerifyAccount.rejected, (state, action) => {
                state.isLoading = false;
                state.response = action.payload;
                return state;
            })
            .addCase(fetchVerifyAccount.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload.data;
                return state;
            })

            // login
            .addCase(fetchLogin.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                const data = action.payload.data;
                console.log(data);
                state.isLoading = false;
                state.userId = data?.options?.data.userId
                state.accessToken = data?.options?.data.access_token
                state.refreshToken = data?.options?.data.refresh_token
                // PopUpSuccess.fire({
                //     icon: "success",
                //     title: "Thành công",
                //     text: data.message,
                // });
                return state;
            });
    },
});
const authReducer = authSlice.reducer;
export default authReducer;
export { fetchRegister, fetchVerifyAccount,fetchLogin };
