import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { detailApi } from "~/apis/detailApi";
import { GET_DETAIL_BY_PRODUCT } from "./detailType";
const initialState = {
    details: [],
    detail: null,
    isLoading: false,
};

const fetchGetDetail = createAsyncThunk(GET_DETAIL_BY_PRODUCT, async (params, thunkApi) => {
    try {
        const response = await detailApi.requestGetDetail(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
});

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetDetail.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetDetail.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetDetail.fulfilled, (state, action) => {
                const detail = action.payload.data;
                state.detail = detail;
                state.isLoading = false;
                return state;
            });
    },
});

const detailReducer = detailSlice.reducer;
export default detailReducer;
export { fetchGetDetail };
