// TodoForm.js

/**
 * Component for adding a new todo item.
 * @param {Object} props - The component props.
 * @param {Function} props.addTodo - Function to add a new todo item.
 * @returns {JSX.Element} - JSX element representing the TodoForm component.
 */
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
