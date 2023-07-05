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

  const handleClick = () => {
    console.log("I am clicked!! " + Math.random());
  };

  const handleClick2 = (name) => {
    console.log(`I am clicked ${name}`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p>Hello {handleNameChange()}</p>
      <button onClick={() => handleClick()}>Click me!!</button>
      {/* () => is the anonymous function that is called on the click. It calls
      handleClick2 on the click */}
      <button onClick={() => handleClick2("Hegde")}>Name button</button>

      {/*(e) stands for event */}
      <button onDoubleClick={(e) => handleClick3(e)}>Event button</button>
    </main>
  );
};

export default Content;
