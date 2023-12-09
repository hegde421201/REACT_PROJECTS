import React, { useState } from "react";
import ListItem from "./ListItem";

const EmbedList = () => {
  const planets = [
    "Earth",
    "Venus",
    "Mercury",
    "Jupiter",
    "Saturn",
    "Pluto",
    "Neptune",
    "Uranus",
    "Mars",
  ];

  const [lists, setLists] = useState(planets);

  let listJsx = lists.map((p1, index) => {
    return <ListItem key={p1} data={p1} className="list-item" />;
  });

  return <div>{listJsx}</div>;
};

export default EmbedList;
