import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import addressReducer from "~/redux/address/addressSlice";
import authReducer from "~/redux/auth/authSlice";
import cartReducer from "~/redux/cart/cartSlice";
import categoryReducer from "~/redux/category/categorySlice";
import couponReducer from "~/redux/coupon/couponSlice";
import customerReducer from "~/redux/customer/customerSlice";
import detailReducer from "~/redux/detail/detailSlice";
import galleryReducer from "~/redux/gallery/gallerySlice";
import orderReducer from "~/redux/order/orderSlice";
import productReducer from "~/redux/product/productSlice";
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
    couponReducer: couponReducer,
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
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            //     ignoredActionPaths: ["payload"],
            // },
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
