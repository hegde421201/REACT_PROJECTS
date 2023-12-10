import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); //parameter in the  URl 1,2,3,4 is retrieved using the useParams() hook
  //useParams() hook returns an object literal which has a {key:value} pair
  const prodObject = useOutletContext();

  //useOutletContext hook gets the data passed from the parent to the child component. ProductDetail is the
  //child component in this case

  const locationHook = useLocation();
  //the hook get the data from the state attribute
  return (
    <div className="prodDetailContainer">
      <div className="imgContainer">
        <img src={prodObject[id - 1].img} alt="img" />
      </div>

      <div className="details">
        <h2>
          {prodObject[id - 1].pname} @ {prodObject[id - 1].price}
        </h2>
        <h3> {prodObject[id - 1].desc} </h3>
        <h4>Shipping : {prodObject[id - 1].shipping}</h4>
      </div>

      {/*  <h2>{JSON.stringify(locationHook.state)}</h2> */}
    </div>
  );
};

export default ProductDetail;
