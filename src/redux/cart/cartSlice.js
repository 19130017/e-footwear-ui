import { createSlice } from "@reduxjs/toolkit";
import { ADD_CART, DELETE_CART, GET_ALL, UPDATE_CART } from "~/redux/cart/cartType";
const initialState = {
    cart: [],
    isLoading: false,
    isSuccess: false,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { chapters, ...course } = action.payload;

            const item = state.cart.find((item) => {
                return item.id === course.id;
            });
            if (!item) state.cart.push(course);
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
            return state;
        },
        removeAllCart: (state, action) => {
            state.cart = [];
            return state;
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeItem, removeAllCart } = cartSlice.actions;
