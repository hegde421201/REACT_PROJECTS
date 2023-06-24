import React, { useState, useRef, useEffect } from "react";

//preserves value
//does not trigger re-render
//target DOM nodes/elements

const UseRefBasics = () => {
  const useRefContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(useRefContainer.current.value);
  };

  useEffect(() => {
    console.log(useRefContainer.current);
    useRefContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={useRefContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
