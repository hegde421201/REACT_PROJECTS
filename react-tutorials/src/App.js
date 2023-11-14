import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Lorem from "./Lorem";
import Footer from "./Footer";
import StateContent from "./StateContent";
import React, { useState } from "react";
import AddItem from "./AddItem";
import Propdrills from "./Propdrills";
import SearchItem from "./SearchItem";

import Square from "./colorChanger/Square";
import Input from "./colorChanger/Input";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  /* const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cola",
    },
    {
      id: 2,
      checked: true,
      item: "Carrot",
    },

    {
      id: 3,
      checked: false,
      item: "Sugar",
    },
  ]); */

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [search, setSearch] = useState("");

  const setAndSaveItems = (listItems) => {
    setItems(listItems); //update using useState hook the itemlist
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const [newItem, setNewItem] = useState("");

  //handler for the checkbox state ----toggle true or false---this handlecheck function is called by the anonymous function
  const handleCheck = (id) => {
    console.log(`key : ${id}`); //using the template literal

    //to see the change in state we again use the map function and iterate the list. We are checking whether the item is is equal to the id paramter passed
    // as  a prop to the function.
    const itemsList = items.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item)

      //...item above is the shallow copy of the state. ...item allows s to spread out the current item state.
      // checked: !item.checked ---> this tells us that checked is the current state of the item and it will be changed
      //to the negation of the item.checked value will be flipped in this case. ? is the ternary operator. If the id's are equal the {} will be true or else
      //the item remains unchanged
    );

    //when the above checkbox is checked then look at this ---
    //style={item.checked ? { textDecoration: "line-through" } : null} ----> this ensures that the label is underlined
    setAndSaveItems(itemsList);
  };

  const handleDelete = (id) => {
    console.log(id);

    //filter function ensures that the item id not equal to the prop id is filtered out or removed from the array
    const listItems = items.filter((i) => i.id !== id);
    setAndSaveItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return; //blank value or undefined return

    addItem(newItem);
    setNewItem("");
  };

  {
    /*  <StateHooks></StateHooks> */
    /*  <Watermark></Watermark> */
  }

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      ></Square>
      <Input
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      ></Input>
    </div>
  );

  /*  return (
    <div className="App">
      <Header title="Groceries List" />
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content />
      <StateContent />
      <Lorem totWords={2} totSentences={12} />

      <Propdrills
        items={items.filter((i) =>
          i.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Propdrills>
      <Footer length={items.length}></Footer>
    </div>
  ); */
}

export default App;
