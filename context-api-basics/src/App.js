import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";

function App() {
  const contextCounter = useContext(CounterContext);
  console.log('Context', contextCounter)

  return (
    <div className="App">
      <h1>Count is {contextCounter.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
