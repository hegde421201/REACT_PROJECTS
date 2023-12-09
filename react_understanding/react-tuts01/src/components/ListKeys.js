import React, { useState } from "react";

const ListKeys = () => {
  const fruits = ["Apple", "Peru", "Figs", "Pineapple", "Oranges", "Sitaphal"];

  const juices = [
    { id: 1, name: "Apple", price: 34 },
    { id: 2, name: "Peru", price: 45 },
    { id: 3, name: "Sitaphal", price: 17 },
    { id: 4, name: "Mango", price: 39 },
  ];

  const [products, setProducts] = useState(fruits);
  const [mixer, setMixer] = useState(juices);

  return (
    //display the fruits array as a list of items
    <div>
      {products.map((p1, index) => {
        //every element p1 is returned as an <li> element in the JSX----way to render collection as a list of items
        return <li key={index.toString()}>{p1}</li>;
      })}

      <hr></hr>

      <p>
        {juices.map((j1) => {
          return (
            <li key={j1.id.toString()}>
              {j1.name} {j1.price}
            </li>
          );
        })}
      </p>
    </div>
  );
};

export default ListKeys;
