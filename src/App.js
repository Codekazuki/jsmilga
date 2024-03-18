import { useState } from "react";
import "./App.css";
// import BookList from "./BookList";
import Events from "./Events";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((c) => c + 1);
  }
  function decrement() {
    setCount((c) => c - 1);
  }
  function reset() {
    setCount((c) => c * 0);
  }
  return (
    <>
      {/* <Events /> */}
      {/* <BookList /> */}
      <div>
        <div>
          <button onClick={increment}>Add</button>
          <h1>{count}</h1>
          <button onClick={decrement}>Minus</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
