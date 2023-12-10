import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [fruits, setFruits] = useState([
    {
      id: 1,
      pname: "Apples",
      desc: "Red Juicy Apples",
      price: "$50",
      shipping: "$3",
      img: "https://www.freepnglogos.com/uploads/apple-png/apple-icon-paradise-fruits-iconset-artbees-0.png",
    },
    {
      id: 2,
      pname: "Bananas",
      desc: "Sweetest Organic Bananas",
      price: "$40",
      shipping: "$10",
      img: "https://www.freepnglogos.com/uploads/banana-png/banana-maui-wowi-hawaiian-coffees-smoothies-23.png",
    },
    {
      id: 3,
      pname: "Grapes",
      desc: "Jumbo Grapes",
      price: "$30",
      shipping: "$5",
      img: "https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png",
    },
    {
      id: 4,
      pname: "Oranges",
      desc: "Packed With Vitamin C",
      price: "$32",
      shipping: "$0",
      img: "https://www.freepnglogos.com/uploads/orange-png/fruit-orange-png-image-pixabay-22.png",
    },
  ]);

  const [product, setProduct] = useState([
    { id: 1, pname: "Apples", price: 50 },
    { id: 2, pname: "Bananas", price: 30 },
    { id: 3, pname: "Watermelons", price: 80 },
    { id: 4, pname: "Grapes", price: 90 },
  ]);

  return (
    <div>
      <ul>
        {fruits.map((item) => {
          return (
            <li key={item.id.toString()} className="card">
              <Link
                state={item}
                to={`/products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={item.img} alt={item.pname} />
                <div className="text">
                  <h3>{item.pname}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <Outlet context={fruits} />
    </div>
  );
};

export default Products;
//passing data to the child component using context attribute from the Outlet component
