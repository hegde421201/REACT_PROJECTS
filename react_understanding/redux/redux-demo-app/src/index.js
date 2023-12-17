import React from "react";
import ReactDOM from "react-dom/client";
//import { combineReducers, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
//import loginReducer from "./components/loginReducer";
import { thunk } from "redux-thunk";
import loginReducer from "./slices/loginSlice";
import productReducer from "./slices/productSlice";
//import productReducer from "./components/productReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

//const rootReducer = combineReducers({ pr: productReducer, lr: loginReducer });
//const store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    lr: loginReducer,
    pr: productReducer,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
