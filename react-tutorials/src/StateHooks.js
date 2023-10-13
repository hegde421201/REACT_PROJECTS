import React, { useState } from "react";

const StateHooks = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cement",
    },
    {
      id: 2,
      checked: false,
      item: "Salt",
    },

    {
      id: 3,
      checked: false,
      item: "Steel",
    },
  ]);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked}></input>
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default StateHooks;
