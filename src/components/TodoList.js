// TodoList.js

/**
 * Component for displaying a list of todo items.
 * @param {Object} props - The component props.
 * @param {Array} props.todos - Array of todo items.
 * @param {Function} props.handleCheckboxChange - Function to handle checkbox change.
 * @param {Function} props.handleDelete - Function to handle todo deletion.
 * @param {Function} props.handleEdit - Function to handle todo editing.
 * @returns {JSX.Element} - JSX element representing the TodoList component.
 */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

function TodoList({ todos, handleCheckboxChange, handleDelete, handleEdit }) {
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");

  // Handles clicking on the edit button
  const handleEditClick = (id, text) => {
    setEditMode(id);
    setEditText(text);
  };

  // Handles submitting the edited text
  const handleEditSubmit = (id) => {
    handleEdit(id, editText);
    setEditMode(null);
    setEditText("");
  };

  // Handles cancelling the edit mode
  const handleCancelEdit = () => {
    setEditMode(null);
    setEditText("");
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div className="todo-checkbox">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo.id)}
            />
          </div>
          <div className="todo-text">
            {editMode === todo.id ? (
              <div className="popup">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className="popup-buttons">
                  <button className="cancel-button" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                  <button
                    className="apply-button"
                    onClick={() => handleEditSubmit(todo.id)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ) : (
              <span
                style={{
                  textDecoration: todo.completed,
                }}
              >
                {todo.text}
              </span>
            )}
          </div>
          <div className="todo-buttons">
            <button
              className="edit-button"
              onClick={() => handleEditClick(todo.id, todo.text)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
