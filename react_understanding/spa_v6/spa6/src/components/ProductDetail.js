import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); //parameter in the  URl 1,2,3,4 is retrieved using the useParams() hook
  //useParams() hook returns an object literal which has a {key:value} pair
  const prodObject = useOutletContext();

  //useOutletContext hook gets the data passed from the parent to the child component. ProductDetail is the
  //child component in this case
  return (
    <div>
      ProductDetail <h1>ID : {id}</h1>
      <h2>{JSON.stringify(prodObject[id - 1])}</h2>
    </div>
  );
};

export default ProductDetail;
