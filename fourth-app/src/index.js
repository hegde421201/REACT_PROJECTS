import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BetterApp from "./BetterApp";

//import the css file --- this file con tains additional css used in the project
import "./book.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      /* <App /> */

      <BetterApp />
    }
  </React.StrictMode>
);
