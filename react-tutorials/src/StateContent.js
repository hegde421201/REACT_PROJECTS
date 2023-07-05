import React from "react";
import { useState } from "react";

const StateContent = () => {
  const handleStateNameChanges = () => {
    //We define the array of numbers with length 6
    const names = [
      "Shakti",
      "Mukti",
      "Bhakti",
      "Aasakti",
      "Drishti",
      "Sukhasan",
      "Ganesh",
    ];

    //We pickup any random name inside the array using a combination of floor and random math functions and return the same
    //when the page is loaded
    const integer = Math.floor(Math.random() * names.length);

    setName(names[integer]);
  };

  //const means that the name variable will not be directly changed. We are using setName to modify the name variable
  const [name, setName] = useState("Ganesh");

  return (
    <main>
      <p>Name changed on click {name}</p>
      <button onClick={() => handleStateNameChanges()}>
        UseState hook example
      </button>
    </main>
  );
};

export default StateContent;
