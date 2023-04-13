import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_CHILDREN_CATEGORY, GET_PARENT_CATEGORY } from "./categoryType";
import { categoryApi } from "~/apis/categoryApi";
const initialState = {
    categories: [],
    category: null,
    isLoading: false,
};

const fetchGetParentCategory = createAsyncThunk(GET_PARENT_CATEGORY, async (params, thunkApi) => {
    try {
        const response = await categoryApi.fetchGetParentCategory();
        console.log(response);
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
                state.isLoading = true;
                return state;
            });
    },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export { fetchGetParentCategory };
