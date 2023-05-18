import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./app/store";
import GlobalStyle from "./components/global-styles/GlobalStyle";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyle>
                        <App />
                    </GlobalStyle>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    // </React.StrictMode>
);

reportWebVitals();
