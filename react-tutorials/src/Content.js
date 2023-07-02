import React from "react";

const Content = () => {
  const handleNameChange = () => {
    //We define the array of names with length 6
    const names = ["Baba", "Cama", "Zameen", "Savita", "Kavya", "Mohan"];

    //We pickup any random name inside the array using a combination of floor and random math functions and return the same
    //when the page is loaded
    const integer = Math.floor(Math.random() * names.length);

    return names[integer];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
    </main>
  );
};

export default Content;
