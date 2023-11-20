import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main>
      <h2>Missing Page</h2>
      <p>Disappointment all-around!!</p>
      <p>
        {" "}
        <Link to="/">Visit our homepage</Link>
      </p>
    </main>
  );
};

export default Missing;
