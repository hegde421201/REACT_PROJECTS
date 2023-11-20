import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import "./index2.css";
import "./index_router.css";
//import App2 from "./App2";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={AppRouter} />
    </Router>
  </React.StrictMode>
);
