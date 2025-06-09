import "./App.css";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Card from "./components/Card";

function App() {
  return (
    <main>
      <Header />
      <Greeting userName={"Depayss"} />
      <Card />
    </main>
  );
}

export default App;
