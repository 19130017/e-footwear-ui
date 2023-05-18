import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_COUPONS } from "./couponType";
import { couponApi } from "~/apis/couponApi";
const initialState = {
    coupons: [],
    isLoading: false,
};

const fetchGetCoupons = createAsyncThunk(GET_COUPONS, async (params, thunkApi) => {
    try {
        const response = await couponApi.requestGetCoupons();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCoupons.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetCoupons.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetCoupons.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                state.coupons = data;
                return state;
            });
    },
});

const couponReducer = couponSlice.reducer
export default couponReducer;
export {fetchGetCoupons}
