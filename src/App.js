import { useState } from "react";
import "./App.css";
// import BookList from "./BookList";
import Events from "./Events";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      {/* <Events /> */}
      {/* <BookList /> */}
      <div>
        <h1>Counter for Innoliz Thomas"</h1>
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
