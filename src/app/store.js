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
import authReducer from "~/toolkits/auth/authSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authReducer"],
};
// const userPersistConfig ={
//     key:"user",
//     sessionStorage,
//     whitelist:['authReducer']
// }

const rootReducer = combineReducers({
    authReducer: authReducer,
});

const appReducer = (state, action) => {
    if (action.type === "AUTH_LOGOUT" + "/fulfilled") {
        return rootReducer(undefined, action);
    }

    return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

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
