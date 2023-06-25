import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "~/apis/authApi";
import MySwal, { PopUpSuccess } from "~/utils/MySwal";
import { GET_CUSTOMER, UPDATE_INFO_CUSTOMER, UPLOAD_AVATAR } from "./customerType";

const initialState = {
    customers: [],
    customer: null,
    isLoading: false,
};

const fetchGetProfile = createAsyncThunk(GET_CUSTOMER, async (params, thunkApi) => {
    try {
        const response = await authApi.requestGetProfile(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchUpdateProfile = createAsyncThunk(UPDATE_INFO_CUSTOMER, async (params, thunkApi) => {
    try {
        const response = await authApi.requestUpdateProfile(
            params.customerInfo,
            params.accessToken
        );
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchUploadAvatar = createAsyncThunk(UPLOAD_AVATAR, async (params, thunkApi) => {
    try {
        const response = await authApi.requestUploadAvatar(params.content, params.accessToken);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //profile
            .addCase(fetchGetProfile.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchGetProfile.rejected, (state, action) => {
                state.isLoading = false;
            })

            .addCase(fetchGetProfile.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.customer = data;
                state.isLoading = false;
                return state;
            })
            //update profile
            .addCase(fetchUpdateProfile.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchUpdateProfile.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
            })

            .addCase(fetchUpdateProfile.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: data,
                });
                return state;
            })
            //upload avatar
            .addCase(fetchUploadAvatar.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchUploadAvatar.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
            })

            .addCase(fetchUploadAvatar.fulfilled, async (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                // get
                const store = await storage.getItem("persist:root");
                //parse to object
                const parseObject = JSON.parse(store);
                const authReducer = JSON.parse(parseObject.authReducer);
                //set avatar
                authReducer.avatar = data;
                
                // parse json
                const jsonAuth = JSON.stringify(authReducer);
                parseObject.authReducer = jsonAuth;
                const jsonObject = JSON.stringify(parseObject);
                storage.setItem("persist:root", jsonObject);

                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Cập nhật ảnh thành công",
                });
                return state;
            });
    },
});

const customerReducer = customerSlice.reducer;
export default customerReducer;
export { fetchGetProfile, fetchUpdateProfile, fetchUploadAvatar };
