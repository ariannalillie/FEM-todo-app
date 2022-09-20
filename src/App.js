import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="todo-list">
      <h1 className="header">TODO</h1>
      <input type="text" onKeyDown={(e) => handleKeyDown(e)} />
      {todos.map((todo, idx) =>  {
        return <div key={idx}>{todo}</div>;
      })}
    </div>
  );
}

export default App;
