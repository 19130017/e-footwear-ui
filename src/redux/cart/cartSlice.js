import { createSlice } from "@reduxjs/toolkit";

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
            console.log(action.payload);
            const order_item = action.payload;
            const existingItem = state.cart.find(
                (item) =>
                    item.detail.product.id === order_item.detail.product.id &&
                    item.detail.size === order_item.detail.size
            );
            if (existingItem) {
                existingItem.quantity += order_item?.quantity;
            } else {
                state.cart.push(order_item);
            }
        },
        incrementQuantity: (state, action) => {
            const { id, size } = action.payload;
            const item = state.cart.find(
                (item) => item.detail.product.id === id && item.detail.size === size
            );
            if (item.quantity === item.detail.stockQuantity) {
                item.quantity = item.detail.stockQuantity;
            } else {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const { id, size } = action.payload;
            const item = state.cart.find(
                (item) => item.detail.product.id === id && item.detail.size === size
            );
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

        clearCart: (state, action) => {
            state.cart = [];
            return state;
        },
    },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;
export const { addToCart, removeItemToCart, incrementQuantity, decrementQuantity, clearCart } =
    cartSlice.actions;
