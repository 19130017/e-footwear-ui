import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";
import { AUTH_LOGIN, AUTH_REGISTER, AUTH_VERIFY_ACCOUNT, AUTH_LOGOUT } from "./authType";

const initialState = {
    accountId: 0,
    refreshToken: "",
    username: "",
    accessToken: "",
    avatar: "",
    isLogin: false,
    isLoading: false,
};

const fetchRegister = createAsyncThunk(AUTH_REGISTER, async (params, thunkApi) => {
    try {
        const response = await authApi.requestRegister(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchVerifyAccount = createAsyncThunk(AUTH_VERIFY_ACCOUNT, async (params, thunkApi) => {
    try {
        const response = await authApi.requestVerifyAccount(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchLogin = createAsyncThunk(AUTH_LOGIN, async (params, thunkApi) => {
    try {
        const response = await authApi.requestLogin(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchLogout = createAsyncThunk(AUTH_LOGOUT, async (params, thunkApi) => {
    return;
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
                    text: data,
                });

                return state;
            })
            // verify account
            .addCase(fetchVerifyAccount.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchVerifyAccount.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchVerifyAccount.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: data,
                });
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
                state.isLoading = false;
                state.isLogin = true;
                state.username = data.username;
                state.accessToken = data.token;
                state.refreshToken = data.refreshToken;
                state.accountId = data.accountId;
                state.avatar = data.avatar;
                state.auth = data;
                return state;
            })
            //Logout
            .addCase(fetchLogout.fulfilled, (state, action) => {
                state.accountId = 0;
                state.refreshToken = "";
                state.username = "";
                state.accessToken = "";
                state.avatar = "";
                state.isLogin = false;
                return state;
            });
    },
});
const authReducer = authSlice.reducer;
export default authReducer;
export { fetchRegister, fetchVerifyAccount, fetchLogin, fetchLogout };
