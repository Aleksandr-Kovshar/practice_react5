import React from "react";
import "./TodoList.css";
import classNames from "classnames";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, comleted }) => (
        <li key={id} className={classNames ("TodoList__item", {"TodoList__item--comleted":comleted})}>
          <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={comleted}
            onChange={() => onToggleCompleted(id)}
          />
          <p className="TodoList__text">{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
