import React from "react";
import { v4 as uuidv4 } from "uuid";

const Product = () => {
  const products = [
    { pname: "Apple", price: 20 },
    { pname: "Orange", price: 40 },
    { pname: "Watermelon", price: 80 },
    { pname: "Grapes", price: 64 },
  ];
  return (
    <div className="customDiv">
      <h3>Product</h3>
      <hr></hr>
      <select>
        {products.map((item, index) => {
          return (
            <option value={products.price} key={uuidv4()}>
              {item.pname}- &#8377;{item.price}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Product;
