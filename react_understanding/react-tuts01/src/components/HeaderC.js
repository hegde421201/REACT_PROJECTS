import React from "react";

const HeaderC = () => {
  console.log("Header rendered");

  const hStyle = {
    border: "2px solid blue",
    width: "100%",
    color: "pink",
  };
  return (
    <div>
      <h4 style={hStyle}>Header Section</h4>
    </div>
  );
};

export default React.memo(HeaderC);
