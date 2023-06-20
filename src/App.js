import "./App.css";
import { Intervalo, Sorteio, Soma, Media } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Exercício Redux</h1>

      <div className="linha">
        <Intervalo />
      </div>

      <div className="linha">
        <Soma />
        <Media />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
