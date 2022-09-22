import checkIcon from "./images/icon-check.svg";
import { useState } from "react";

export const Todo = ({ todo, idx, isDark, draggedItem, dragOverItem, handleSort}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);

  const startDrag = () => {
    draggedItem.current = idx;
    setDragStarted(true);
  };

  const endDrag = () => {  
    setDragStarted(false);
    handleSort();
  };

  return (
    <>
      <div
        key={idx}
        className={isDark ? "list-item-dark" : "list-item"}
        style={{ opacity: dragStarted ? .3 : 1 }}
        draggable
        onDragStart={startDrag}
        onDragEnter={(e) => dragOverItem.current = idx}
        onDragEnd={endDrag}
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
