// TodoItem.js

/**
 * Component representing a single todo item.
 * @param {Object} props - The component props.
 * @param {Object} props.todo - The todo item object.
 * @returns {JSX.Element} - JSX element representing the TodoItem component.
 */
import React from "react";
import { useTodoContext } from "../context/TodoContext";
import { toggleTodo, deleteTodo } from "../actions/todoActions";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodoContext();

  // Handles toggling the completion status of a todo item
  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  // Handles deleting a todo item
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
