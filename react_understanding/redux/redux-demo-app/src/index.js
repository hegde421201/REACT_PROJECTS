import React from "react";
import ReactDOM from "react-dom/client";
import { combineReducers, createStore } from "redux";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import loginReducer from "./components/loginReducer";
import productReducer from "./components/productReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({ pr: productReducer, lr: loginReducer });
const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
