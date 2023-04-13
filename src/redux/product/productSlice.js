import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_ALL_PRODUCT, GET_PRODUCT_BY_NAME, GET_PRODUCT_BY_SLUG } from "./productType";
import { productApi } from "~/apis/productApi";
const initialState = {
    products: [],
    product: null,
    isLoading: false,
};

const fetchAllProduct = createAsyncThunk(GET_ALL_PRODUCT, async (params, thunkApi) => {
    try {
        const response = await productApi.requestAllProduct();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                const products = action.payload.data;
                state.products = products;
                state.isLoading = false;
                return state;
            });
    },
});

const productReducer = productSlice.reducer;
export default productReducer;
export { fetchAllProduct };
