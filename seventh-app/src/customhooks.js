import React from "react";
import { useFetch } from "./fetch";
import Product from "./Product";
import { data } from "./sofa_products";

const url = "https://course-api.com/javascript-store-products";

const CustomHooks = () => {
  //here we fetch the data from the custom hook
  //const { loading, products } = useFetch(url);

  const { product2 } = data;
  console.log(product2);
  return (
    <div>
      <h2>Products</h2>
      <section className="products">
        {product2.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default CustomHooks;
