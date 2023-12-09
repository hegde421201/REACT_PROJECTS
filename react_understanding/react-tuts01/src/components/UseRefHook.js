import React, { useRef } from "react";

const UseRefHook = () => {
  const iElement = useRef(null);
  return (
    <div className="UseRefHook">
      <hr></hr>
      <input type="text" ref={iElement}></input>
      <hr></hr>
      <button onClick={() => iElement.current.focus()}>Set Focus</button>
    </div>
  );
};

export default UseRefHook;
