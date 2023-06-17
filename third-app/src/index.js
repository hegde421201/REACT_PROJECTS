import React from "react";
import ReactDOM from "react-dom";

const Testing = () => {
  return React.createElement("h4", {}, "hello world,testing apps");
};

const Person = () => <h2>Hey,This is Reaction</h2>;

const Message = () => {
  return <p>This is a Paragraph for reaction</p>;
};

//nested components
const Application = () => {
  return (
    <div>
      <Person />
      <Message />
      <Testing />
    </div>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

/**
 * 
 * 
 * 
ReactDOM.render() is a React method to render a React app to the web page.

ReactDOM.render() takes at least 2 parameters:

1) element (what we want to render)
2) container (where we want to render) 



*/
