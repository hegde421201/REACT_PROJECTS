import React from "react";
import { useState } from "react";
import { data } from "./data";

const PropDrilling = () => {
  const [person, setPerson] = useState(data);
  const removePerson = (id) => {
    setPerson((p1) => {
      return p1.filter((x1) => id !== x1.id);
    });
  };

  return (
    <section>
      <h3>Prop drilling</h3>
      <List person={person} removePerson={removePerson} />
    </section>
  );
};

const List = ({ person, removePerson }) => {
  return (
    <>
      {person.map((p1) => {
        return <SinglePerson key={p1.id} {...p1} removePerson={removePerson} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
