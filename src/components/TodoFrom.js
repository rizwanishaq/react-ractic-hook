import React, { useState } from "react";

function TodoFrom({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-inline d-flex justify-content-center"
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <span className="badge badge-primary badge-pill">
        <button type="submit" className="btn btn-primary">
          Add an item to list
        </button>
      </span>
    </form>
  );
}

export default TodoFrom;
