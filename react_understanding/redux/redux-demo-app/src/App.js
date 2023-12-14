import "./App.css";
import Product from "./components/Product";
import Total from "./components/Total";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Product />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
