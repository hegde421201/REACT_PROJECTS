import React, { useState } from "react";

const Literals = () => {
  const [cnt, setCnt] = useState({ counter: 0, mFlag: true });

  const numberPlay = (operation) => {
    let temp = cnt.counter;

    switch (operation) {
      case "+":
        temp++;
        break;

      case "-":
        temp--;
        break;

      default:
        break;
    }

    //here the initial cnt object is defined using the spread operator. then the update happens
    //for the counter. the spread operator tells us that the initial cnt object will be "spread" as it is
    //and then the update of the counter property inside the object happens wherein the counter property gets
    // the value from the temp variable.
    //Thus, the spread operator (...)  is used to create a new object based on the
    //current state cnt and updating the counter property with the value of temp.
    //This is a common pattern in React
    //when you want to update a specific property in the state while preserving the rest of the state.
    setCnt({ ...cnt, counter: temp });
  };

  return (
    <div>
      <p>{JSON.stringify(cnt)}</p>
      <button className="custom-button" onClick={() => numberPlay("+")}>
        Number play add
      </button>
      <button className="custom-button" onClick={() => numberPlay("-")}>
        Number play subtract
      </button>
      <button
        className="custom-button"
        onClick={() => setCnt({ ...cnt, mFlag: !cnt.mFlag })}
      >
        Boolean play toggle
      </button>
    </div>
  );
};

export default Literals;

/** Having object literal inside a useState hook. We use the spread operator (...) to update individual pieces of state  */
