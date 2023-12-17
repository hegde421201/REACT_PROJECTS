import React from "react";
import { useSelector } from "react-redux";
const Total = () => {
  const total = useSelector((state) => state.pr.total);
  const loginDetails = useSelector((state) => state.lr.loginDetails);
  return (
    <div className="customDiv">
      <h3>Total - User {loginDetails}</h3>
      <hr></hr>
      <h2>Total : {total}</h2>
    </div>
  );
};

export default Total;
