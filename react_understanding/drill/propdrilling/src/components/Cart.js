import React from "react";
import TotalContext from "../store/TotalContext";

const Cart = (props) => {
  return (
    <TotalContext.Consumer>
      {(total) => {
        return (
          <div className="customDiv">
            <h3>Cart Component</h3>
            <hr></hr>
            <ul>
              {props.cart.map((item, index) => {
                return <li key={index}>{item.pname}</li>;
              })}
            </ul>
            {total}
          </div>
        );
      }}
    </TotalContext.Consumer>
  );
};

export default Cart;
