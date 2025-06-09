import "./App.css";
import Header from "./components/Header";
import Greeting from "./components/Greeting";

function App() {
  return (
    <main>
      <Header />
      <Greeting userName = {"Depayss"}/>
    </main>
  );
}

export default App;
