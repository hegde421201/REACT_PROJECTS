import React, { useState } from "react";
import Products from "./components/Products";

const AppRendering = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const inputChangeHandler = (e) => {
    setIsAdmin(e.target.checked);
  };
  return (
    <div className="AppRendering">
      <input type="checkbox" onChange={inputChangeHandler} />
      Is Admin
      <hr></hr>
      <Products isAdmin={isAdmin} />
    </div>
  );
};

export default AppRendering;
