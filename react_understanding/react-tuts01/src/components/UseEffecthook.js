import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    //  console.log("Useffectiveness!! " + counter);

    //creating a digital clock using useEffect
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    console.log("UseEffect flagsy ", flag, "useEffect countsy", count);
  }, [flag]);

  return (
    <div className="useEffectHook">
      UseEffecthook<h1>{time}</h1>
      <h2>
        Counter : {count} <br></br>Flag :{flag.toString()}
      </h2>
      <button onClick={() => setTime(new Date().toLocaleString())}>
        Check Time Now!!
      </button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setFlag(!flag)}>Toggle</button>
    </div>
  );
};

export default UseEffecthook;

//useEffect Hook is called every time a component is rendered or re-rendered
/**
 * mutations,subscriptions,timers,logging and other side effects are not allowed inside the
 * main body of a function component
 *
 *
 * In the above example, we created a digital clock using useEffect.
 */
