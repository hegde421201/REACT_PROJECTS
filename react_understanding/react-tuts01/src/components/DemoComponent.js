import React from "react";

const DemoComponent = (props) => {
  return (
    <div>
      {props.children}
      <h1>Props object : - {JSON.stringify(props)}</h1>
      <h2>Name: - {props.pName}</h2>
      <h2>Code : - {props.pCode.toString()}</h2>
      <h3>Value: {props.value}</h3>
      <hr></hr>
    </div>
  );
};

export default DemoComponent;
