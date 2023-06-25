import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { data } from "./data";

const UseReducerBasics = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [person, setPerson] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPerson([...person, { id: new Date().getTime().toString(), name }]);
      setName("");
      console.log(person);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
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

      {person.map((p1) => {
        return (
          <div key={p1.id}>
            <h4>{p1.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default UseReducerBasics;
