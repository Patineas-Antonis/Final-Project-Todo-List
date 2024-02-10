import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { toggleTodo, deleteTodo } from "../actions/todoActions";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
