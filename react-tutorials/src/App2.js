import "./App.css";

import Form from "./fetchData/Form";
import List from "./fetchData/List";
import Table from "./fetchData/Table";
import React, { useEffect, useState } from "react";

function App2() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [requestType, setRequestType] = useState("users"); // /users

  //the data objects that we receive from the above URL will be in the items array
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${requestType}`);
        const data = await response.json();

        setItems(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchItems();
  }, [requestType]);

  return (
    <div className="App2">
      <Form requestType={requestType} setRequestType={setRequestType}></Form>
      {/* <List items={items}></List> */}
      <Table items={items}></Table>
    </div>
  );
}

export default App2;
