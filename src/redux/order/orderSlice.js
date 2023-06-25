import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderApi } from "~/apis/orderApi";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";
import {
    CREATE_ORDER,
    CREATE_ORDER_MOMO,
    CREATE_ORDER_VNPAY,
    GET_ORDER,
    GET_ORDER_OF_CUSTOMER,
    UPDATE_STATUS,
} from "./orderType";

const initialState = {
    order: null,
    orders: [],
    isLoading: false,
    response: null,
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

const fetchCreateOrderMomo = createAsyncThunk(CREATE_ORDER_MOMO, async (params, thunkApi) => {
    try {
        const response = await orderApi.requestCreateOrderMomo(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});
const fetchCreateOrderVN_Pay = createAsyncThunk(CREATE_ORDER_VNPAY, async (params, thunkApi) => {
    try {
        const response = await orderApi.requestCreateOrderVN_Pay(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});
const fetchUpdateStatus = createAsyncThunk(UPDATE_STATUS, async (params, thunkApi) => {
    try {
        const response = await orderApi.requestUpdateStatusByCode(
            params.orderRequest,
            params.accessToken
        );
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
            // tạo đơn đặt hàng momo
            .addCase(fetchCreateOrderMomo.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchCreateOrderMomo.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchCreateOrderMomo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload.data;
                console.log(action.payload.data);
                return state;
            })
            // tạo đơn hàng vnpay
            .addCase(fetchCreateOrderVN_Pay.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchCreateOrderVN_Pay.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchCreateOrderVN_Pay.fulfilled, (state, action) => {
                state.isLoading = false;
                state.response = action.payload.data;
                return state;
            })
            // cập nhật trạng thái đơn hàng
            .addCase(fetchUpdateStatus.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchUpdateStatus.rejected, (state, action) => {
                state.isLoading = false;

                return state;
            })
            .addCase(fetchUpdateStatus.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.order = data;
                state.isLoading = false;
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
export {
    fetchCreateOrder, fetchCreateOrderMomo, fetchCreateOrderVN_Pay, fetchGetOrder, fetchGetOrders, fetchUpdateStatus
};
