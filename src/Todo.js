import checkIcon from "./images/icon-check.svg";
import { useState } from "react";

export const Todo = ({ todo, idx, isDark, draggedItem, dragOverItem, handleSort}) => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <>
      <div
        key={idx}
        className={isDark ? "list-item-dark" : "list-item"}
        draggable
        onDragStart={(e) => draggedItem.current = idx}
        onDragEnter={(e) => dragOverItem.current = idx}
        onDragEnd={handleSort}
        onDragOver={(e) => e.preventDefault()}
      >
        <div
          className={isChecked ? "checked" : "checkbox"}
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked && <img src={checkIcon} alt="check icon" />}
        </div>
        <p className={isChecked ? "checked-todo" : ""}>{todo}</p>
      </div>
    </>
  );
};
