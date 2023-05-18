const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const {
    CREATE_ADDRESS,
    UPDATE_ADDRESS,
    DELETE_ADDRESS,
    GET_ADDRESS,
    GET_ALL_ADDRESSES,
} = require("./addressType");
const { addressApi } = require("~/apis/addressApi");
const { default: MySwal, PopUpSuccess } = require("~/utils/MySwal");

const initialState = {
    addresses: [],
    address: null,
    isLoading: false,
    isChanged: false,
};

const fetchCreateAddress = createAsyncThunk(CREATE_ADDRESS, async (params, thunkApi) => {
    try {
        const response = await addressApi.requestCreateAddress(
            params.newAddress,
            params.accessToken,
            params.accountId
        );
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchUpdateAddress = createAsyncThunk(UPDATE_ADDRESS, async (params, thunkApi) => {
    try {
        const response = await addressApi.requestUpdateAddress(
            params.newAddress,
            params.accessToken,
            params.accountId
        );
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchDeleteAddress = createAsyncThunk(DELETE_ADDRESS, async (params, thunkApi) => {
    try {
        const response = await addressApi.requestDeleteAddress(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchGetAddress = createAsyncThunk(GET_ADDRESS, async (params, thunkApi) => {
    try {
        const response = await addressApi.requestGetAddress(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const fetchGetAddresses = createAsyncThunk(GET_ALL_ADDRESSES, async (params, thunkApi) => {
    try {
        const response = await addressApi.requestGetAddresses(params);
        return response.success
            ? thunkApi.fulfillWithValue(response)
            : thunkApi.rejectWithValue(response);
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data);
    }
});

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // create address
            .addCase(fetchCreateAddress.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchCreateAddress.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchCreateAddress.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isChanged = true;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Thêm địa chỉ thành công",
                });
                return state;
            })

            // update address
            .addCase(fetchUpdateAddress.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchUpdateAddress.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchUpdateAddress.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isChanged = true;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Cập nhật địa chỉ thành công",
                });
                return state;
            })
            // get address
            .addCase(fetchGetAddress.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchGetAddress.rejected, (state, action) => {
                state.isLoading = false;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchGetAddress.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                state.address = data;
                return state;
            })
            // delete address
            .addCase(fetchDeleteAddress.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })
            .addCase(fetchDeleteAddress.rejected, (state, action) => {
                state.isLoading = false;
                state.isChanged = true;
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: action.payload.message,
                });
                return state;
            })
            .addCase(fetchDeleteAddress.fulfilled, (state, action) => {
                state.isLoading = false;
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Xoá địa chỉ thành công",
                });
                return state;
            })
            //get address delivery
            .addCase(fetchGetAddresses.pending, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchGetAddresses.rejected, (state, action) => {
                state.isLoading = true;
                return state;
            })

            .addCase(fetchGetAddresses.fulfilled, (state, action) => {
                const data = action.payload.data;
                state.isLoading = false;
                state.addresses = data;
                return state;
            });
    },
});

const addressReducer = addressSlice.reducer;
export default addressReducer;

export {
    fetchCreateAddress,
    fetchUpdateAddress,
    fetchGetAddress,
    fetchDeleteAddress,
    fetchGetAddresses,
};
