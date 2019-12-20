import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={index}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <span className="badge badge-primary badge-pill">
        <button className="btn-primary" onClick={() => completeTodo(index)}>
          Complete
        </button>

        <button className="btn-primary" onClick={() => removeTodo(index)}>
          x
        </button>
      </span>
    </li>
  );
}

export default Todo;
