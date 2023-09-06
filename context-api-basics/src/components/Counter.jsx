import React from "react";
import { CounterContext } from "../context/Counter";
import { useContext } from "react";
const Counter = () => {
  const contextCounter = useContext(CounterContext);
  const counterIncrease = () => contextCounter.setCount(contextCounter.count + 1);
  const counterDecrease = () => contextCounter.setCount(contextCounter.count - 1);


  return (
    <div>
      <button onClick={counterIncrease}>Increment</button>
      <button onClick={counterDecrease}>Decrement</button>
    </div>
  );
};

export default Counter;
