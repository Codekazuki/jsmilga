import { useState } from "react";
import "./App.css";
import BookList from "./BookList";

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
      <BookList />
    </>
  );
}

export default App;
