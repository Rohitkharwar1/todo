import { useState } from "react";

import "./App.css";
import Todo from "./todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello</h1>
      <Todo />
    </>
  );
}

export default App;
