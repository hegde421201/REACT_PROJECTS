import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); //useselector hook provides us with access to piece of
  //data from the store --- we can access this pice of data using the state variable which has access to the
  //entire store or refers to the global state

  const purchaseHandler = (e) => {
    //t retrieves the selected option's text using event.target.options[event.target.selectedIndex].text

    let pname = e.target.options[e.target.selectedIndex].text;
    //console.log("kati patang", pname);
    let price = e.target.value;
    let obj = { pname, price };

    dispatch({ type: "PURCHASE", payload: obj });

    //  console.log("Event handler - purchase " + pname);
  };
  return (
    <div className="customDiv">
      <h3>Product</h3>
      <hr></hr>
      <select onChange={(e) => purchaseHandler(e)}>
        {products.map((item, index) => {
          return (
            <option value={item.price} key={uuidv4()}>
              {item.pname}- &#8377;{item.price}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Product;
