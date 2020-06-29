import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const logger = () => next => action => {
    console.log("dispatching action:", action);
    next(action);
};

const store= createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
        document.getElementById("root")
);
