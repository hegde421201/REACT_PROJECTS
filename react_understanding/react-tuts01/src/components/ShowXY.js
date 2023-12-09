import React, { useEffect, useState } from "react";

const ShowXY = () => {
  const [showXY, setXY] = useState("0,0");
  const [data, setData] = useState(true);

  const displayXY = (e) => {
    let strings = e.pageX + "," + e.pageY;
    setXY(strings);
  };

  useEffect(() => {
    window.addEventListener("mousemove", displayXY);

    console.log("Render or re-render --- i m called!!. What is your logic?");

    return () => {
      console.log("return man return clean up code!!");

      //if you want to unsubscribe above event listener then do the following
      //  window.removeEventListener("mousemove", displayXY);
    };
  }, [showXY]);

  return (
    <div>
      ShowXY component
      {data === true ? <p>{data.toString()}</p> : <p>{showXY}</p>}
      <br></br>
      <button onClick={() => setData(!data)}> Toggle </button>
      <br></br>
      <p>{showXY}</p>
    </div>
  );
};

export default ShowXY;

/**
  In the code above, if the useEffect hook is configured without dependencies - which means it runs after every render 
  (initial render and subsequent re-renders). The return statement inside useEffect contains a cleanup function, which also runs on every render.

   if you only want the useEffect to run when the showXY state changes, we need to include the dependency array inside the useEffect function as follows:
   [showXY]
 */
