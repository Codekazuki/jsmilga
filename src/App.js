import { useState } from "react";
import "./App.css";
import Test from "./Test";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount((c) => c + 1);
  }
  function handleDecrement() {
    setCount((c) => c - 1);
  }
  return (
    <>
      <div className='App'>
        <button onClick={handleIncrement}>increment</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>decrement</button>
      </div>
      <Test />
    </>
  );
}

export default App;
