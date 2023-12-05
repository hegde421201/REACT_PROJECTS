import React, { useState, useEffect } from "react";

const UseCallBacks = () => {
  const [userInput, setUserInput] = useState("Hello");

  const [num1] = useState(4);
  const [num2] = useState(5);

  const sum = () => num1 + num2;

  useEffect(() => {
    //console.log("new value ", sum());
  }, []);

  return (
    <p className="useCallBacks">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <h1>Output :{userInput || "--"}</h1>
    </p>
  );
};

export default UseCallBacks;
