import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { Route, Routes, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/**
  The first step to configure the router is giving a top level or high order component named <BrowserRouter>

  All the routes and components will be wrapped inside <BrowserRouter> component, as it will store the clear 
  URLs internally,using which you actually route through all the components or basically the entire application
 */
