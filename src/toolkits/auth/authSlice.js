import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";
import { AUTH_REGISTER } from "./authType";
const initialState = {
    username: "",
    email: "",
    accessToken: "",
    refreshToken: "",
    isLogined: false,
    isLoading: false,
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
                    text: action.payload?.message,
                });
                return state;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                console.log(action.payload);
                const data = action.payload?.data;
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: data.message,
                });
                return state;
            });
    },
});
const authReducer = authSlice.reducer;
export default authReducer;
export { fetchRegister };
