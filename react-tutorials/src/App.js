import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Lorem from "./Lorem";
import Footer from "./Footer";
import StateContent from "./StateContent";
import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Propdrills from "./Propdrills";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";
import Square from "./colorChanger/Square";
import Input from "./colorChanger/Input";

//npx json-server -p 3500 -w data/db.json
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

  /* const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist") || [])
  ); */

  const [items, setItems] = useState([]);

  const [search, setSearch] = useState("");

  const [newItem, setNewItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3500/items";

  /* useEffect(() => {

    console.log("loaded");
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]); */

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      //IIFE
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  //handler for the checkbox state ----toggle true or false---this handlecheck function is called by the anonymous function
  const handleCheck = async (id) => {
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

    const myItem = itemsList.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const requestUrl = `${API_URL}/${id}`;

    const result = await apiRequest(requestUrl, updateOptions);

    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    console.log(id);

    //filter function ensures that the item id not equal to the prop id is filtered out or removed from the array
    const listItems = items.filter((i) => i.id !== id);
    setAndSaveItems(listItems);

    const deleteOptions = { method: "DELETE" };

    const requestUrl = `${API_URL}/${id}`;

    const result = await apiRequest(requestUrl, deleteOptions);

    if (result) setFetchError(result);
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

    const postRequestOptions = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await apiRequest(API_URL, postRequestOptions);
    if (result) setFetchError(result);
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

  /* return (
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
  ); */

  const setAndSaveItems = (listItems) => {
    setItems(listItems); //update using useState hook the itemlist
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      {/*   
      <Content />
      <StateContent />
      <Lorem totWords={2} totSentences={12} /> */}
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && (
          <p style={{ color: "red" }}>{`Error : ${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && (
          <Propdrills
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          ></Propdrills>
        )}
      </main>
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
