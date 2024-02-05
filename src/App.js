import { useState } from "react";
import "./App.css";
// import BookList from "./BookList";
import Events from "./Events";
import Birthday from "./Birthday";

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
      <Birthday />
      <Events />
      {/* <BookList /> */}
      <div className='App'>
        <button onClick={handleIncrement}>increment</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </>
  );
}

export default App;
