import React from "react";

const Footer = () => {
  console.log("Footer rendered");

  const hStyle = {
    border: "2px solid gray",
    width: "100%",
    color: "green",
  };
  return (
    <div>
      <h5 style={hStyle}>Footer Section</h5>
    </div>
  );
};

export default React.memo(Footer);
