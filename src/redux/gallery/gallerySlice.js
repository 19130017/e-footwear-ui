import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { galleryApi } from "~/apis/galleryApi";
import {
    GET_ADS,
    GET_BANNER,
    GET_CAROUSEL,
    GET_COLLECTION,
    GET_FOOTER
} from "./galleryType";

const initialState = {
    carousel: [],
    banner: [],
    footer: [],
    category: [],
    ads: [],
    collection: [],
    isLoading: false,
};

const fetchGetCarousels = createAsyncThunk(GET_CAROUSEL, async (params, thunkApi) => {
    try {
        const response = await galleryApi.requestGetCarousels();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchGetBanners = createAsyncThunk(GET_BANNER, async (params, thunkApi) => {
    try {
        const response = await galleryApi.requestGetBanners();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        thunkApi.rejectWithValue(error.response.data);
    }
});
const fetchGetAds = createAsyncThunk(GET_ADS, async (params, thunkApi) => {
    try {
        const response = await galleryApi.requestGetAds();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        thunkApi.rejectWithValue(error.response.data);
    }
});

const fetchGetCollections = createAsyncThunk(GET_COLLECTION, async (params, thunkApi) => {
    try {
        const response = await galleryApi.requestGetCollections();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        thunkApi.rejectWithValue(error.response.data);
    }
});
const fetchGetFooter = createAsyncThunk(GET_FOOTER, async (params, thunkApi) => {
    try {
        const response = await galleryApi.requestGetFooter();
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (error) {
        thunkApi.rejectWithValue(error.response.data);
    }
});

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // carousel
            .addCase(fetchGetCarousels.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetCarousels.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetCarousels.fulfilled, (state, action) => {
                const carousel = action.payload.data;
                state.carousel = carousel;
                state.isLoading = false;
                return state;
            })
            // banner
            .addCase(fetchGetBanners.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetBanners.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetBanners.fulfilled, (state, action) => {
                const banner = action.payload.data;
                state.banner = banner;
                state.isLoading = false;
                return state;
            })           
            // collection
            .addCase(fetchGetCollections.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetCollections.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetCollections.fulfilled, (state, action) => {
                const collection = action.payload.data;
                state.collection = collection;
                state.isLoading = false;
                return state;
            })
            // ads
            .addCase(fetchGetAds.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetAds.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetAds.fulfilled, (state, action) => {
                const ads = action.payload.data;
                state.ads = ads;
                state.isLoading = false;
                return state;
            })
            // footer
            .addCase(fetchGetFooter.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetFooter.rejected, (state, action) => {
                state.isLoading = false;
                return state;
            })
            .addCase(fetchGetFooter.fulfilled, (state, action) => {
                const footer = action.payload.data;
                state.footer = footer;
                state.isLoading = false;
                return state;
            });
    },
});

const galleryReducer = gallerySlice.reducer;
export default galleryReducer;
export {
    fetchGetAds,
    fetchGetBanners, fetchGetCarousels, fetchGetCollections,
    fetchGetFooter
};
