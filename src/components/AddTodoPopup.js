import React, { useState } from "react";

const AddTodoPopup = ({ onClose, onAdd }) => {
  const [todoText, setTodoText] = useState("");

  const handleApply = () => {
    if (todoText.trim() !== "") {
      onAdd(todoText); 
      setTodoText(""); 
      onClose(); 
    }
  };

  return (
    <div className="popup">
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
