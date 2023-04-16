import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    GET_ALL_PRODUCT_BY_CATE_SLUG,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_BY_SLUG,
} from "./productType";
import { productApi } from "~/apis/productApi";
const initialState = {
    products: [],
    product: null,
    isLoading: false,
};

const fetchAllProductByCateSlug = createAsyncThunk(
    GET_ALL_PRODUCT_BY_CATE_SLUG,
    async (params, thunkApi) => {
        try {
            const response = await productApi.requestAllProductByCateSlug(params);
            return response.success
                ? thunkApi.fulfillWithValue(response)
                : thunkApi.rejectWithValue(response);
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductByCateSlug.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchAllProductByCateSlug.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchAllProductByCateSlug.fulfilled, (state, action) => {
                const products = action.payload.data;
                state.products = products;
                state.isLoading = false;
                return state;
            });
    },
});

const productReducer = productSlice.reducer;
export default productReducer;
export { fetchAllProductByCateSlug };
