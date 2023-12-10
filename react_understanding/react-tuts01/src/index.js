import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppEventHandling from "./AppEventHandling";
import AppRendering from "./AppRendering";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
