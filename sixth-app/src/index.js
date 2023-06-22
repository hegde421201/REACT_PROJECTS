import React from "react";
import ReactDOM from "react-dom/client";
import Ternary from "./ternary";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <App></App>
     <UseEffectCleanup />
    <UseEffectFetchData></UseEffectFetchData>
    <ConditionalRendering></ConditionalRendering>
     <ShortCircuit></ShortCircuit>
    */}

    <Ternary></Ternary>
  </React.StrictMode>
);
