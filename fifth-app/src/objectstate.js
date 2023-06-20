import React, { useState } from "react";

const UseStateObjectExample = () => {
  //usestate is an array with two elements
  //useState accepts an initial state and returns two values: --- The current state and a function that updates the state.

  const [employee, setEmployee] = useState({
    name: "Kannan",
    age: 34,
    message: "I am a robot!!",
  });

  const changeMessage = () => {
    //here the data is wiped out
    setEmployee({ ...employee, message: "I am a man now!!" });
  };

  return (
    <React.Fragment>
      <h3>{employee.name}</h3>
      <h3>{employee.age}</h3>
      <h3>{employee.message}</h3>
      <button className="btn" type="button" onClick={changeMessage}>
        Change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObjectExample;

/**
  if we use  
  const changeMessage = () => {

    //here the data is wiped out
    setEmployee({ message: "I am a man now!!" });
  };

then the data is wiped out

 */
