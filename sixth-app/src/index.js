import React from "react";
import ReactDOM from "react-dom/client";
import ConditionalRendering from "./crendering";
import "./index.css";
import ShortCircuit from "./shortcircuit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <App></App>
     <UseEffectCleanup />
    <UseEffectFetchData></UseEffectFetchData>
    <ConditionalRendering></ConditionalRendering>
    */}

    <ShortCircuit></ShortCircuit>
  </React.StrictMode>
);
