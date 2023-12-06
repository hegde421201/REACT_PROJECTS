import React, { useState } from "react";

const EventHandle = () => {
  const [data, setData] = useState(0);

  const numberPlay = (operation) => {
    switch (operation) {
      case "+":
        setData(data + 1);
        break;

      case "-":
        setData(data - 1);
        break;

      default:
        break;
    }
  };

  const btnStyle = {
    width: "150px",
    height: "100px",
    color: "blue",
    fontSize: "12px",
  };

  let message2 = React.createElement(
    "p",
    { style: { color: "red" } },
    "Hello moto"
  );

  let message = (
    <h2 style={{ color: "brown" }}>
      Hello event handlers {new Date().getFullYear().toString()}
    </h2>
  );
  let a = 5;
  let b = 9;

  return (
    <div>
      {message} {a + b}
      <p>{data}</p>
      <p>{message2}</p>
      <button className="custom-button" onClick={() => numberPlay("+")}>
        Number play add
      </button>
      <button style={btnStyle} onClick={() => numberPlay("-")}>
        Number play subtract
      </button>
    </div>
  );
};

export default EventHandle;

/**
 * The above way of writing the onClick function for the button is incorrect as the function numberPlay is
 * immediately invoked when the component is rendered. This can lead to an infinite loop of renders
 * if setData triggers a re-render, which in turn calls numberPlay again, and so on.
 * The function numberPlay is invoked immediately because of parameter passing.
 * To fix this issue, we need to wrap the numberPlay function call inside an anonymous function as follows:
 * 
  <button onClick={() => numberPlay("+")}>Number play add</button>
  Here the anonymous function will prevent the immediate invocation of the numberPlay function but will call the 
  desired function with the appropriate parameter only on button click.

   In JavaScript, the () => syntax is used to create an anonymous function, also known as an arrow function. 
   This syntax is often used in React when defining functions inline, especially for event handlers.
  
   The reason the functions are not executed when the component is rendered is due to the way React handles
    event handlers and function references in JSX.

When you provide a function reference as a prop, such as in an event handler like onClick, 
 React expects that function to be a callback.
 It does not immediately execute the function during the render phase. Instead, React attaches 
the function as an event handler or a callback that will be invoked later, typically in response to an event (e.g., a button click).
 */
