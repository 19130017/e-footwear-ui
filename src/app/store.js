import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import authReducer from "~/redux/auth/authSlice";
import productReducer from "~/redux/product/productSlice";
import categoryReducer from "~/redux/category/categorySlice";
import detailReducer from "~/redux/detail/detailSlice";
import galleryReducer from "~/redux/gallery/gallerySlice";
import customerReducer from "~/redux/customer/customerSlice";
import cartReducer from "~/redux/cart/cartSlice";
import addressReducer from "~/redux/address/addressSlice";
import orderReducer from "~/redux/order/orderSlice";
import { AUTH_LOGOUT } from "~/redux/auth/authType";
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authReducer", "cartReducer"],
};

const rootReducer = combineReducers({
    authReducer: authReducer,
    customerReducer: customerReducer,
    productReducer: productReducer,
    categoryReducer: categoryReducer,
    detailReducer: detailReducer,
    galleryReducer: galleryReducer,
    cartReducer: cartReducer,
    addressReducer: addressReducer,
    orderReducer: orderReducer,
});

// const appReducer = (state, action) => {
//     if (action.type === AUTH_LOGOUT + "/fulfilled") {
//         return rootReducer(undefined, action);
//     }

//     return rootReducer(state, action);
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredActionPaths: ["payload.headers"],
            },
        }),
});

export const persistor = persistStore(store);
