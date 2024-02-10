import React from "react";

function TodoList({ todos, handleCheckboxChange }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)} 
          />
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
