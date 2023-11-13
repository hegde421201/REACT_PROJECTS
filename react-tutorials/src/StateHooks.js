import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const StateHooks = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cement",
    },
    {
      id: 2,
      checked: true,
      item: "Salt",
    },

    {
      id: 3,
      checked: false,
      item: "Steel",
    },
  ]);

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

    setItems(itemsList); //update using useState hook the itemlist

    //when the above checkbox is checked then look at this ---
    //style={item.checked ? { textDecoration: "line-through" } : null} ----> this ensures that the label is underlined
    localStorage.setItem("shoppinglist", JSON.stringify(itemsList));
  };

  const handleDelete = (id) => {
    console.log(id);

    //filter function ensures that the item id not equal to the prop id is filtered out or removed from the array
    const listItems = items.filter((i) => i.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  /**
   * items.map----> here we are iterating the items list using the map function which is a higher-order
   * function ---inside every 'item' we have <li> --- a list of sub-items,so to speak. There are 3 sub-items for
   * item in the list. The checked sub-item which is either true or false represents the state of the checkbox
   *FaTrashAlt----this is the wrapper for the delete button.

   Each <li> item in react requires a  key. We have defined the key using the item id as expression. This 
   allows react to identify which items have been added/updated/deleted. React responds to changes in state and 
   re-renders the JSX
   */

  return (
    /* {items.length  is the ternary expression to check whether the item list is 
      empty or not. If true then it includes the unordered list or 
      else it includes the empty shopping list message */
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              ></input>
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Shopping list empty</p>
      )}
    </main>
  );
};

export default StateHooks;
