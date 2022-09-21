import "./App.css";
import { useState } from "react";
import checkIcon from './images/icon-check.svg';

function App() {
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, e.target.value]);
      e.target.value = "";
    }
  };

  // Handle checkbox click
  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

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
                <div className={isChecked ? 'checked' : "checkbox"} onClick={handleCheck}>
                  {isChecked && <img src={checkIcon} alt="check icon" />}
                </div>
                <p className={isChecked ? 'checked-todo' : ""}>{todo}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
