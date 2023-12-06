import "./App.css";
import React, { useState } from "react";
import LazyInitial from "./components/LazyInitial";
import EventHandle from "./components/EventHandle";

function initialState() {
  console.log("Expensive process " + Date.now());
  return 0;
}

function App() {
  const [count, setCount] = useState(0);
  // the lazy initialisation is done by the below anonymous function call
  const [x, setX] = useState(() => initialState());

  const addNumber = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{x}</h2>
      <button onClick={addNumber}>Increment</button>
      <button onClick={() => setX(x + 2)}>Increment by 2</button>
      {/* <LazyInitial /> 
       
      */}

      <EventHandle />
    </div>
  );
}

export default App;

/**
      
 */
