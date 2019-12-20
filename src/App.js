import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import TodoFrom from "./components/TodoFrom";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Need to learn something",
      isCompleted: false
    },
    {
      text: "Some practice for Dask",
      isCompleted: false
    },
    {
      text: "Watch amazing movie",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="jumbotron d-flex align-items-center">
        <div className="container">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <TodoFrom addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
