import React, { useState } from "react";
import { data } from "./data";

const UseStateArrayExample = () => {
  //usestate is an array with two elements
  //useState accepts an initial state and returns two values: --- The current state and a function that updates the state.
  const [students, setStudents] = React.useState(data);

  return (
    <>
      {students.map((student) => {
        const { id, name } = student;

        const removeItem = (id) => {
          //filter the students whose id does not match --- meaning we are retaining everyone except the person with that id
          let newStudents = student.filter((student) => student.id != id);
          setStudents(newStudents); //remaining students are added to the array
        };

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove item</button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setStudents([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArrayExample;
