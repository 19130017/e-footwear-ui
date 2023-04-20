import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    GET_ALL_PRODUCT_BY_CATE_SLUG,
    GET_PRODUCT_BY_SLUG_COLOR,
    GET_PRODUCT_BY_SLUG,
    GET_PRODUCTS_HOT,
    GET_PRODUCTS_NEW,
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
const fetchProductsBySlug = createAsyncThunk(GET_PRODUCT_BY_SLUG, async (params, thunkApi) => {
    try {
        const response = await productApi.requestGetProductBySlug(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchProductBySlugColor = createAsyncThunk(
    GET_PRODUCT_BY_SLUG_COLOR,
    async (params, thunkApi) => {
        try {
            const response = await productApi.requestGetProduct(params);
            return response.success
                ? thunkApi.fulfillWithValue(response)
                : thunkApi.rejectWithValue(response);
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

const fetchProductsHot = createAsyncThunk(GET_PRODUCTS_HOT, async (params, thunkApi) => {
    try {
        const response = await productApi.requestGetProductHot(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});
const fetchProductsNew = createAsyncThunk(GET_PRODUCTS_NEW, async (params, thunkApi) => {
    try {
        const response = await productApi.requestGetProductNew(params);
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
            // get products by category slug
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
            })
            // get products by slug
            .addCase(fetchProductsBySlug.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchProductsBySlug.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchProductsBySlug.fulfilled, (state, action) => {
                const products = action.payload.data;
                state.products = products;
                state.isLoading = false;
                return state;
            })
            // get product by slug and color
            .addCase(fetchProductBySlugColor.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchProductBySlugColor.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchProductBySlugColor.fulfilled, (state, action) => {
                const product = action.payload.data;
                state.product = product;
                state.isLoading = false;
                return state;
            })
            // get product hot
            .addCase(fetchProductsHot.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchProductsHot.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchProductsHot.fulfilled, (state, action) => {
                const products = action.payload.data;
                state.products = products;
                state.isLoading = false;
                return state;
            })
            // get product new
            .addCase(fetchProductsNew.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchProductsNew.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchProductsNew.fulfilled, (state, action) => {
                const products = action.payload.data;
                state.products = products;
                state.isLoading = false;
                return state;
            });
    },
});

const productReducer = productSlice.reducer;
export default productReducer;
export {
    fetchAllProductByCateSlug,
    fetchProductBySlugColor,
    fetchProductsBySlug,
    fetchProductsHot,
    fetchProductsNew,
};
