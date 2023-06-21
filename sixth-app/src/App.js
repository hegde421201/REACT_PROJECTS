import "./App.css";
import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    //every click the useffect works--- it reserved the value between render and then triggered re-render
    console.log("useEffect is cool");

    if (value > 2) document.title = `New Messages(${value})`;
  });

  useEffect(() => {
    console.log("useEffect is used only once here");
  }, []);
  //the empty arraylist ensures that the log message is rendered only once. If we have some values inside the array then the useEffect updates accordingly

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me!
      </button>
    </>
  );
};

export default UseEffectBasics;

//by default,useEffect will run after every re-render
//cleanup function
//the functionalities within the useEffect will also be executed on every button clicked
