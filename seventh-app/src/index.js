import React from "react";
import ReactDOM from "react-dom/client";
import CustomHooks from "./customhooks";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <MultForms /> 
    <UseRefBasics />
     <UseReducerBasics />
      <UseReducerBetter />
       <PropDrilling />
        <ContextApi></ContextApi>
    */}

    <CustomHooks></CustomHooks>
  </React.StrictMode>
);
