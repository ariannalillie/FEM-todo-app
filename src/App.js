import "./App.css";
import { useState } from "react";
import checkIcon from "./images/icon-check.svg";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";

function App() {
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, e.target.value]);
      e.target.value = "";
    }
  };

  // Handle checkbox click
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  // Handle toggling between dark and light mode
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "background-dark": "background"}>
      <div className="todo-list-container">
        <div className="top-container">
          <h1 className="header">TODO</h1>
          <img
            src={isDark ? sun : moon}
            alt="theme toggle"
            onClick={toggleTheme}
          />
        </div>
        <input
          className={isDark ? "input-dark" : "input"}
          type="text"
          placeholder="Create a new todo..."
          onKeyDown={(e) => handleKeyDown(e)}
        />
        {todos.map((todo, idx) => {
          return (
            <>
              <div
                key={idx}
                className={isDark ? "list-item-dark" : "list-item"}
              >
                <div
                  className={isChecked ? "checked" : "checkbox"}
                  onClick={handleCheck}
                >
                  {isChecked && <img src={checkIcon} alt="check icon" />}
                </div>
                <p className={isChecked ? "checked-todo" : ""}>{todo}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
