import React, { useState } from "react";

const UseStateCounterExample = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <section
        style={{
          margin: "4 rem 0",
        }}
      >
        <h2>regular counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounterExample;
