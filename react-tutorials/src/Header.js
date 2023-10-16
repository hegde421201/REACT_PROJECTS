import React from "react";

const Header = (props) => {
  const headerStyle = {
    backgroundColor: "green",
    color: "#fff",
  };

  return (
    <header style={headerStyle}>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title:"Default title"
}

export default Header;
