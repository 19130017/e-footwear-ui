const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { CREATE_ADDRESS } = require("./addressType");
const { addressApi } = require("~/apis/addressApi");
const { default: MySwal, PopUpSuccess } = require("~/utils/MySwal");

const initialState = {
    addresses: [],
    address: null,
    isLoading: false,
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

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
                PopUpSuccess.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Thêm địa chỉ thành công",
                });
                return state;
            });
    },
});

const addressReducer = addressSlice.reducer;
export default addressReducer;

export { fetchCreateAddress };
