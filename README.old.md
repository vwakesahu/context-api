# context-api

## Step1: Create Context


import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(5);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};

## Step2: Wraping in index.js

import { CounterProvider } from "./context/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);


## Step3: Acccesing elements

 const contextCounter = useContext(CounterContext);
  console.log('Context', contextCounter)
   <h1>Count is {contextCounter.count}</h1>

