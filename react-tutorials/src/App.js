import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Lorem from "./Lorem";
import Footer from "./Footer";
import StateContent from "./StateContent";
import ListsKeys from "./ListsKeys";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <StateContent />
      <Lorem totWords={2} totSentences={12} />

      <ListsKeys></ListsKeys>
      <Footer></Footer>
    </div>
  );
}

export default App;
