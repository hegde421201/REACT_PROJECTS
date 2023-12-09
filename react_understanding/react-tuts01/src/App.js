import "./App.css";
import React, { useEffect, useState } from "react";
import LazyInitial from "./components/LazyInitial";
import EventHandle from "./components/EventHandle";
import Literals from "./components/Literals";
import ClassComponent from "./components/ClassComponent";
import UseEffecthook from "./components/UseEffecthook";
import ShowXY from "./components/ShowXY";
import UseRefHook from "./components/UseRefHook";
import UseCallBackHook from "./components/UseCallBackHook";
import ListKeys from "./components/ListKeys";
import EmbedList from "./components/EmbedList";
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

  useEffect(() => {
    console.log("see me see me");

    return () => {
      console.log("clean up code");
    };
  });

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{x}</h2>
      <button onClick={addNumber}>Increment</button>
      <button onClick={() => setX(x + 1)}>Increment by 2</button>
      {/* <LazyInitial /> 
       <EventHandle />
        <Literals />
         <ClassComponent />
         <UseEffecthook />
          {x % 2 === 0 ? <ShowXY /> : <EventHandle />}
            <UseRefHook />
             <UseCallBackHook />
              <ListKeys />
      */}

      <EmbedList />
    </div>
  );
}

export default App;

/**
      
 */
