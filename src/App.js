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


  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    console.log(dragItem.current = position);
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    console.log(dragOverItem.current = position);
    console.log(e.target.innerHTML);
  };

  const drop = () => {
    const copyListItems = [...todos];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(copyListItems);
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
              drop={drop}
              dragEnter={dragEnter}
              dragStart={dragStart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
