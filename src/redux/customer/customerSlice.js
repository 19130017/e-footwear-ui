import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "~/apis/authApi";
import { addressApi } from "~/apis/addressApi";
import {
    CUSTOMER_LOGOUT,
    GET_CUSTOMER,
    UPDATE_INFO_CUSTOMER,
    CUSTOMER_ADDRESSES,
} from "./customerType";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";

const initialState = {
    customers: [],
    customer: null,
    isLoading: false,
    orders: [],
    addresses: [],
};

const fetchGetProfile = createAsyncThunk(GET_CUSTOMER, async (params, thunkApi) => {
    try {
        const response = await authApi.requestGetProfile(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchUpdateProfile = createAsyncThunk(UPDATE_INFO_CUSTOMER, async (params, thunkApi) => {
    try {
        const response = await authApi.requestUpdateProfile(
            params.customerInfo,
            params.accessToken
        );
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //profile
            .addCase(fetchGetProfile.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchGetProfile.rejected, (state, action) => {
                state.isLoading = true;
            })

            .addCase(fetchGetProfile.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.customer = data;
                state.isLoading = false;
                return state;
            })
            //update profile
            .addCase(fetchUpdateProfile.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchUpdateProfile.rejected, (state, action) => {
                state.isLoading = true;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
            })

            .addCase(fetchUpdateProfile.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: data,
                });
                return state;
            });
    },
});

const customerReducer = customerSlice.reducer;
export default customerReducer;
export { fetchGetProfile, fetchUpdateProfile };
