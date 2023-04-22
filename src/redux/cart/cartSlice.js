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
            const product = action.payload;
            const existingItem = state.cart.find(
                (item) => item.id === product.id && item.size === product.size
            );
            if (existingItem) {
                existingItem.quantity += product?.quantity;
            } else {
                state.cart.push(product);
            }
        },
        incrementQuantity: (state, action) => {
            const { id, size } = action.payload;
            const item = state.cart.find((item) => item.id === id && item.size === size);
            if (item.quantity === item.stockQuantity) {
                item.quantity = item.stockQuantity;
            } else {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const { id, size } = action.payload;
            const item = state.cart.find((item) => item.id === id && item.size === size);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },

        removeItemToCart: (state, action) => {
            const cart = state.cart.filter((item, index) => index !== action.payload);
            state.cart = cart;
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeItemToCart, incrementQuantity, decrementQuantity } =
    cartSlice.actions;
