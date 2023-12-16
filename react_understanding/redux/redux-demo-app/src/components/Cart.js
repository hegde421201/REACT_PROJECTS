import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteHandler = (index, price) => {
    dispatch({ type: "DELETE", payload: { index, price } });
  };
  return (
    <div className="customDiv">
      <h3>Cart</h3>
      <hr></hr>
      <ul>
        {cart.map((item, index) => {
          return (
            <li key={uuidv4()} onClick={() => deleteHandler(index, item.price)}>
              {item.pname}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
