// AddTodoPopup.js

/**
 * Component for adding a new todo item through a popup.
 * @param {Object} props - The component props.
 * @param {Function} props.onClose - Function to close the popup.
 * @param {Function} props.onAdd - Function to add a new todo item.
 * @param {boolean} props.darkMode - Flag indicating whether dark mode is enabled.
 * @returns {JSX.Element} - JSX element representing the AddTodoPopup component.
 */
import React, { useState } from "react";

const AddTodoPopup = ({ onClose, onAdd, darkMode }) => {
  const [todoText, setTodoText] = useState("");

  // Handles applying the todo item addition
  const handleApply = () => {
    if (todoText.trim() !== "") {
      onAdd(todoText); 
      setTodoText(""); 
      onClose(); 
    }
  };

  // Styles for the popup component based on dark mode
  const popupStyle = {
    background: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
  };

  return (
    <div className="popup" style={popupStyle}>
      <h2 className="popup-title">Add Todo</h2>
      <input
        type="text"
        id="todoInput" 
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="popup-input"
        placeholder="Enter todo text"
      />
      <div className="popup-buttons">
        <div className="cancel-button-container">
          <button className="popup-button" onClick={onClose}>
            Cancel
          </button>
        </div>
        <div className="apply-button-container">
          <button className="popup-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoPopup;
