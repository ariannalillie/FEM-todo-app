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
    <div>
      <h1 className="header">TODO</h1>
      <div className="todo-list-container">
        <input className="input" type="text" onKeyDown={(e) => handleKeyDown(e)} />
        {todos.map((todo, idx) => {
          return (
            <div key={idx} className="list-item">
              {todo}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
