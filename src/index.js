import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
    breakpoints: {
        values: {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
});

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);

reportWebVitals();
