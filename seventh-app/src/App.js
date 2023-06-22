import React, { useState } from "react";

const ControlledInputs = () => {
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input type="text" id="email" name="email" />
          </div>
          <button type="submit">Add employee</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
