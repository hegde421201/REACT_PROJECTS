import React from "react";

const DemoComponent = (props) => {
  return (
    <div>
      <p>Props object</p>
      {JSON.stringify(props)}
      <hr></hr>
      <h2>Name: - {props.pName}</h2>
      <h2>Code : - {props.pCode.toString()}</h2>
    </div>
  );
};

export default DemoComponent;
