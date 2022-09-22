import "./App.css";
import { useState, useRef } from "react";
import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, e.target.value]);
      e.target.value = "";
    }
  };

  // Handle toggling between dark and light mode
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Save reference for the draggedItem and dragOverItem
  const draggedItem = useRef(null);
  const dragOverItem = useRef(null);

  // Handle sorting the todos after item is dragged and dropped
  const handleSort = () => {
    let items = [...todos];
    const draggedItemContent = items.splice(draggedItem.current, 1)[0];
    items.splice(dragOverItem.current, 0, draggedItemContent);
    draggedItem.current = null;
    dragOverItem.current = null;
    setTodos(items);
  };

  return (
    <div className={isDark ? "background-dark" : "background"}>
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
            <Todo
              todo={todo}
              idx={idx}
              isDark={isDark}
              checkboxClass="checked"
              draggedItem={draggedItem}
              dragOverItem={dragOverItem}
              handleSort={handleSort}
            />
          );
        })}
        <div className={isDark ? "bottom-container-dark" :"bottom-container"}>
          <p className="text side-text">{todos.length} items left</p>
          <div className="filter-buttons">
            <p className="text filter-text">All</p>
            <p className="text filter-text">Active</p>
            <p className="text filter-text">Completed</p>
          </div>
          <p className="text side-text" onClick={() => setTodos([])}>Clear Completed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
