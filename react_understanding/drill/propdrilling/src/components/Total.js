import React from "react";
import TotalContext from "../store/TotalContext";

const Total = () => {
  return (
    <TotalContext.Consumer>
      {(total) => {
        return (
          <div className="customDiv">
            <h3>Total Component</h3>
            <hr></hr>
            <h2>Total : {total}</h2>
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
};

export default Total;
