import React, { useState } from "react";

let x = "Rest is painful";
const ErrorExample = () => {
  //usestate is an array with two elements
  //useState accepts an initial state and returns two values: --- The current state and a function that updates the state.
  const [title, setTitle] = useState(x);

  const handleClick = () => {
    if (title === x) setTitle("Resting is bad for appraisals!!");
    else setTitle(x);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

//
