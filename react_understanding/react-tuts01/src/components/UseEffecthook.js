import React, { useState } from "react";

const UseEffecthook = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="useEffectHook">
      UseEffecthook<h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default UseEffecthook;

//useEffect Hook is called every time a component is rendered or re-rendered
