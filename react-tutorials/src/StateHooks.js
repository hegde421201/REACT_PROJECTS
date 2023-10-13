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

  return <main></main>;
};

export default StateHooks;
