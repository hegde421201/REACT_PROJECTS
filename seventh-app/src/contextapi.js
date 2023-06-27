import React, { useState, useContext } from "react";
import { data } from "./data";

const PersonContext = React.createContext();

const ContextApi = () => {
  const [person, setPerson] = useState(data);
  const removePerson = (id) => {
    setPerson((p1) => {
      return p1.filter((x1) => id !== x1.id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, person }}>
      <h3>prop drilling</h3>
      <List></List>
    </PersonContext.Provider>
  );
};

const List = () => {
  const data = useContext(PersonContext);

  return (
    <>
      {data.person.map((p1) => {
        return <SinglePerson key={p1.id} {...p1} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={removePerson}>Remove</button>
    </div>
  );
};

export default ContextApi;
