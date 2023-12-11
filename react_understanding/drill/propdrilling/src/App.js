import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Total from "./components/Total";
import TotalContext from "./store/TotalContext";

function App() {
  //data array of objects which will be filled in the dropdown. these objects can be
  //chosen to be added to the cart on clicking the dropdown values
  const products = [
    { price: 20, pname: "Grapes" },
    { price: 45, pname: "Apples" },
    { price: 80, pname: "Watermelons" },
    { price: 65, pname: "Oranges" },
  ];

  const [cart, setProducts] = useState([]); //cart of objects picked
  const [total, setTotal] = useState(0); //total price to be paid by the customer

  let handleProdChange = (e) => {
    let pname = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart = [...cart];
    let obj = { pname, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setProducts(tCart);
    setTotal(tPrice);
  };

  return (
    <div className="App">
      <div className="customDiv">
        <h3>Purchase component</h3>
        <hr></hr>
        {/** This is the product component containing the dropdown values. Each value consists of the product name
         * followed by the price listing in Indian rupees
         */}
        <select onChange={handleProdChange}>
          {products.map((item, index) => {
            return (
              <option value={item.price} key={index}>
                {item.pname} - &#8377;{item.price}
              </option>
            );
          })}
        </select>
      </div>

      <TotalContext.Provider value={total}>
        <Cart cart={cart} />
        <Total />
      </TotalContext.Provider>
    </div>
  );
}

export default App;

//cart and total components are getting updated on the click of
//the dropdown

/**
 There are three steps to setup context api:
 1) create the context
 2) provider
 3) consumer 
 */
