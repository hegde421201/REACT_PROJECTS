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

  const handleCheck = (id) => {
    console.log(`key : ${id}`);

    const itemsList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(itemsList);
    localStorage.setItem("shoppinglist", JSON.stringify(itemsList));
  };

  const handleDelete = (id) => {
    console.log(id);
    const listItems = items.filter((i) => i.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
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
