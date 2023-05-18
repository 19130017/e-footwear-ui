import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_PARENT_CATEGORY, GET_CATEGORY_BY_SLUG } from "./categoryType";
import { categoryApi } from "~/apis/categoryApi";
const initialState = {
    categories: [],
    category: null,
    isLoading: false,
};

const fetchGetParentCategory = createAsyncThunk(GET_PARENT_CATEGORY, async (params, thunkApi) => {
    try {
        const response = await categoryApi.requestGetParentCategory();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return error.rejectWithValue(error.response.data);
    }
});

const fetchCategoryBySlug = createAsyncThunk(GET_CATEGORY_BY_SLUG, async (params, thunkApi) => {
    try {
        const response = await categoryApi.requestCategoryBySlug(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return error.rejectWithValue(error.response.data);
    }
});

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get parent root category
            .addCase(fetchGetParentCategory.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetParentCategory.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })

            .addCase(fetchGetParentCategory.fulfilled, (state, action) => {
                const categories = action.payload.data;
                state.categories = categories;
                state.isLoading = false;
                return state;
            })
            // get  category
            .addCase(fetchCategoryBySlug.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchCategoryBySlug.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })

            .addCase(fetchCategoryBySlug.fulfilled, (state, action) => {
                const category = action.payload.data;
                state.category = category;
                state.isLoading = false;
                return state;
            });
    },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export { fetchGetParentCategory, fetchCategoryBySlug };
