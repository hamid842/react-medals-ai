import React from "react";
import ReactDOM from "react-dom/client";

// third party
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ErrorBoundary} from "react-error-boundary";

// project imports
import App from "./App";
import {store} from "@/store";
import ErrorFallBack from "@/error/ErrorFallBack";

// style + assets
import "@/assets/scss/style.scss";
// TODO handle onReset for error boundary
ReactDOM.createRoot(document.getElementById("root")).render(
    <ErrorBoundary
        FallbackComponent={ErrorFallBack}
    >
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </ErrorBoundary>
);
