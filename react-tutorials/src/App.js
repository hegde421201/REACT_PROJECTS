import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Lorem from "./Lorem";
import Footer from "./Footer";
import StateContent from "./StateContent";
import StateHooks from "./StateHooks";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Cola",
    },
    {
      id: 2,
      checked: true,
      item: "Carrot",
    },

    {
      id: 3,
      checked: false,
      item: "Sugar",
    },
  ]);
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content />
      <StateContent />
      <Lorem totWords={2} totSentences={12} />

      <StateHooks></StateHooks>
      <Footer></Footer>
    </div>
  );
}

export default App;
