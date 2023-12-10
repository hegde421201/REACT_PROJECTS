import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([
    { id: 1, pname: "Apples", price: 50 },
    { id: 2, pname: "Bananas", price: 30 },
    { id: 3, pname: "Watermelons", price: 80 },
    { id: 4, pname: "Grapes", price: 90 },
  ]);

  return (
    <div>
      <ul>
        {product.map((item) => {
          return (
            <li key={item.id.toString()}>
              <Link
                to={`/products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                {item.pname}
              </Link>
            </li>
          );
        })}
      </ul>

      <Outlet context={product} />
    </div>
  );
};

export default Products;
//passing data to the child component using context from the Outlet component
