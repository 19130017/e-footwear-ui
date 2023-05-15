import { orderApi } from "~/apis/orderApi";
import { CREATE_ORDER, GET_ORDER_OF_CUSTOMER, GET_ORDER } from "./orderType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";
import storage from "redux-persist/lib/storage";

const initialState = {
    order: null,
    orders: [],
    isLoading: false,
};

const fetchCreateOrder = createAsyncThunk(CREATE_ORDER, async (params, thunkApi) => {
    try {
        const response = await orderApi.requestCreateOrder(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchGetOrders = createAsyncThunk(GET_ORDER_OF_CUSTOMER, async (params, thunkApi) => {
    try {
        const response = await orderApi.requestGetOrders(params.accountId, params.accessToken);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchGetOrder = createAsyncThunk(GET_ORDER, async (params, thunkApi) => {
    try {
        const response = await orderApi.requestGetOrder(params.id, params.accessToken);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});
const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // tạo đơn đặt hàng
            .addCase(fetchCreateOrder.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchCreateOrder.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchCreateOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Đặt hàng thành công",
                });
                return state;
            })
            // get all orders of customer
            .addCase(fetchGetOrders.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetOrders.rejected, (state, action) => {
                state.isLoading = false;

                return state;
            })
            .addCase(fetchGetOrders.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                state.orders = data;
                return state;
            })
            // get order detail
            .addCase(fetchGetOrder.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetOrder.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetOrder.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                state.order = data;
                return state;
            });
    },
});

const orderReducer = orderSlice.reducer;
export default orderReducer;
export { fetchCreateOrder, fetchGetOrders, fetchGetOrder };
