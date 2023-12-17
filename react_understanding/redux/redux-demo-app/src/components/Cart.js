import React from "react";
import { v4 as uuidv4 } from "uuid";
import { DELETE } from "./actions";
import { deleteItem } from "../slices/productSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const loginDetails = useSelector((state) => state.lr.loginDetails);
  const cart = useSelector((state) => state.pr.cart);
  const dispatch = useDispatch();
  const deleteHandler = (index, price) => {
    // dispatch({ type: DELETE, payload: { index, price } });
    dispatch(deleteItem({ index, price }));
  };
  const handleKeyDown = () => {
    console.log();
  };

  return (
    <div className="customDiv">
      <h3>Cart - User {loginDetails}</h3>
      <hr></hr>
      <ul>
        {cart.map((item, index) => {
          return (
            <li
              key={uuidv4()}
              onKeyDown={() => handleKeyDown()}
              onClick={() => deleteHandler(index, item.price)}
            >
              {item.pname}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
