import React, { useRef, useEffect } from "react";

//preserves value
//does not trigger re-render
//target DOM nodes/elements

const UseRefBasics = () => {
  //OBJECT With key value "current" and initial value null
  const useRefContainer = useRef(null);
  const divRefContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(useRefContainer.current.value);
    console.log(divRefContainer.current);
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
      <div ref={divRefContainer}>
        <p>Hello India</p>
      </div>
    </>
  );
};

export default UseRefBasics;
