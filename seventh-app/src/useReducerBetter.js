import React from "react";
import { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

const UseReducerBetter = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((p1) => {
        return (
          <div key={p1.id}>
            <h4>{p1.name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: p1.id })}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerBetter;
