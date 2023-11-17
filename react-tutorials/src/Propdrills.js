import React from "react";
import ItemList from "./ItemList";

const Propdrills = ({ items, handleCheck, handleDelete }) => {
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
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></ItemList>
      ) : (
        <p style={{ marginTop: "2rem" }}>Shopping list empty</p>
      )}
    </>
  );
};

export default Propdrills;
