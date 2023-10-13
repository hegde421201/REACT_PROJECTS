import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("ganesh");
  const [count, setCount] = useState(5);

  const handleNameChange = () => {
    //We define the array of names with length 6
    const names = ["Baba", "Cama", "Zameen", "Savita", "Kavya", "Mohan"];

    //We pickup any rand  om name inside the array using a combination of floor and random math functions and return the same
    //when the page is loaded
    const integer = Math.floor(Math.random() * names.length);

    setName(names[integer]);
    console.log(name);
  };

  const handleClick = () => {
    console.log("I am clicked randomly!! " + Math.random());
  };

  const handleCount = () => {
    setCount(1 + count);
    setCount(6 + count);
    console.log("I am clicked!! " + count);
  };

  const handleClick2 = (name) => {
    console.log(`I am clicked ${name}`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onClick={handleClick}>Hello Click me and see console!!</p>
      <button onClick={handleNameChange}>Click me!!</button>
      {/* () => is the anonymous function that is called on the click. It calls
      handleClick2 on the click */}
      <button onClick={() => handleClick2("Hegde")}>Name button</button>
      <button onClick={() => handleCount()}>Count button</button>

      {/*(e) stands for event */}
      <button onDoubleClick={(e) => handleClick3(e)}>Event button</button>
    </main>
  );
};

export default Content;
