import "./App.css";
import Product from "./components/Product";
import Total from "./components/Total";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Product />
      <Cart />
      <Total />
    </div>
  );
}

export default App;

/**
 1. create the global store and reducer
 2. Use the <Provider> to pass/provide the store data
 3. Access the store data at component level
 4. Dispatch action if there events
 ******

 Whenever there is an event you need to write that event inside the reducer function.
 Whenever there is an action from the component,you dispatch the action type along with the data
 */
