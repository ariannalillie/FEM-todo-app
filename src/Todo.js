import checkIcon from "./images/icon-check.svg";

export const Todo = ({ todo, idx, handleCheck, isDark, isChecked }) => {
  return (
    <>
      <div key={idx} className={isDark ? "list-item-dark" : "list-item"}>
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
};
