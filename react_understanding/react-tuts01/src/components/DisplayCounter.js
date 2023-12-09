import React from "react";

const DisplayCounter = (props) => {
  console.log("Display counter rendered");
  return (
    <div className="DisplayCounter">
      <h2>Counter : {props.counter}</h2>
    </div>
  );
};

export default React.memo(DisplayCounter);
