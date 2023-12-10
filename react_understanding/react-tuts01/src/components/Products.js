import React, { useState } from "react";

const Products = (props) => {
  const [prod, setProd] = useState([
    { pCode: 1000, pName: "Grapes" },
    { pCode: 1001, pName: "Watermelon" },
    { pCode: 1002, pName: "Apple" },
    { pCode: 1003, pName: "Raspberry" },
  ]);

  const prodJsx = prod.map((x) => {
    return <li key={x.pCode}>{x.pName}</li>;
  });

  return props.isAdmin ? (
    <div>
      <p>{prodJsx}</p>
    </div>
  ) : (
    <h1>No Data Found</h1>
  );
};

export default Products;

/**
   if (props.isAdmin) {
    return (
      <div>
        <p>{prodJsx}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No Data Found</h1>
      </div>
    );
  } 
 */
