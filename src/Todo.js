import checkIcon from "./images/icon-check.svg";
import { useState } from "react";

export const Todo = ({ todo, idx, isDark, drop, dragEnter, dragStart}) => {
  const [isChecked, setIsChecked] = useState(false);


  return (
    <>
      <div
        key={idx}
        className={isDark ? "list-item-dark" : "list-item"}
        draggable
        onDragStart={(e) => dragStart(e, idx)}
        onDragEnter={(e) => dragEnter(e, idx)}
        onDragEnd={drop}
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
