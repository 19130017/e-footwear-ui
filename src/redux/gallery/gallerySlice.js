import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_GALLERIES_BY_TYPE } from "./galleryType";
import { galleryApi } from "~/apis/galleryApi";

const initialState = {
    galleries: {},
    gallery: null,
    type: [],
    isLoading: false,
};

const fetchGetGalleriesByType = createAsyncThunk(
    GET_GALLERIES_BY_TYPE,
    async (params, thunkApi) => {
        try {
            const response = await galleryApi.requestGetGalleriesByType(params);
            return response.success
                ? thunkApi.fulfillWithValue(response)
                : thunkApi.rejectWithValue(response);
        } catch (error) {
            thunkApi.rejectWithValue(error.response.data);
        }
    }
);
const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetGalleriesByType.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetGalleriesByType.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetGalleriesByType.fulfilled, (state, action) => {
                const galleries = action.payload.data;
                const type = action.meta.arg;
                if (!state.type.includes(type)) {
                    state.type.push(type);
                    state.galleries = Object.assign(state.galleries, { [type]: galleries });
                    state.isLoading = false;
                }
                return state;
            });
    },
});

const galleryReducer = gallerySlice.reducer;
export default galleryReducer;
export { fetchGetGalleriesByType };
