import React, { useState } from "react";

const LazyInitial = () => {
  const fetchData = async () => {
    try {
      //perform the data fetching from the webservice

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );

      if (!response.ok) {
        // Check if the response status is not OK (e.g., 404 error)
        setData(`Error: ${response.status} - ${response.statusText}`);
      }

      setData(await response.json()); // we are using the response as a json object to set the data variable
    } catch (err) {
      setData(null);
    }
  };

  // Lazy initialization with a function for the data state----We are using the setTimeout function to set a 1000 ms delay and then invoke the fetchData
  //function for easier understanding
  const [data, setData] = useState(() => setTimeout(() => fetchData(), 1000));
  //const [data, setData] = useState(fetchData());
  return (
    <div>
      <h1>LazyInitialization Component</h1>
      {data !== null ? (
        <p>
          Data from the web service: <br></br>
          {JSON.stringify(data)}
        </p>
      ) : (
        <p>Loading data lazily...</p>
      )}
    </div>
  );
};

export default LazyInitial;

/**
  In this example for lazy initialization we use the useState hook.
  
  
Lazy initialization refers to the practice of delaying the creation or initialization of a resource 
until it is actually needed. In the context of React and the useState hook, lazy initialization typically 
involves initializing state with a function instead of a direct value.

In React, when we use the useState hook, we can provide an initial state value. 
Instead of providing a static value as the initial state, 
we can pass a function that returns the initial state. 
This function is only called once, the first time the component is rendered.


In this example we fetch data from a web service in a React component. Here we implement lazy 
initialization using the useState hook and perform the data fetching when the component mounts.

We are deliberately adding the 1000 milliseonds delay to show the fetching of album data with a tiny halt
 */
