import React, { useEffect, useState } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerHeight);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("bol raha hoon");

    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;

//by default,useEffect will run after every re-render
//cleanup function
//the functionalities within the useEffect will also be executed on every button clicked
