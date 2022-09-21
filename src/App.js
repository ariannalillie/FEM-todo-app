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
      <div className="todo-list-container">
      <h1 className="header">TODO</h1>
        <input
          className="input"
          type="text"
          placeholder="Create a new todo..."
          onKeyDown={(e) => handleKeyDown(e)}
        />
        {todos.map((todo, idx) => {
          return (
            <>
              <div key={idx} className="list-item">
              <input className="checkbox" type="checkbox"></input>
                {todo}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
