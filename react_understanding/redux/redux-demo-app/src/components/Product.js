import React from "react";

const Product = () => {
  const products = [
    { pname: "Apple", price: 20 },
    { pname: "Orange", price: 40 },
    { pname: "Watermelon", price: 80 },
    { pname: "Grapes", price: 64 },
  ];
  return (
    <div className="customDiv">
      <select>
        <option></option>
      </select>
    </div>
  );
};

export default Product;
