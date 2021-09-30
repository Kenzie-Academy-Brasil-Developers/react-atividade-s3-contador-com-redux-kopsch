import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addCounter, subCounter } from "./store/modules/counter/action";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAddCounter = () => dispatch(addCounter(1));
  const handleSubCounter = () => dispatch(subCounter(1));

  return (
    <div className="App">
      <h3 className="counter">Contador: {counter}</h3>
      <button className="counter-button add" onClick={handleAddCounter}>
        Incrementar
      </button>
      <button className="counter-button sub" onClick={handleSubCounter}>
        Decrementar
      </button>
    </div>
  );
}

export default App;
