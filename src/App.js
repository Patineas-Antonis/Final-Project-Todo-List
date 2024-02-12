// App.js

/**
 * Main application component.
 */
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import ThemeToggle from "./components/ThemeToggle";
import AddTodoPopup from "./components/AddTodoPopup";
import { TodoContextProvider } from "./context/TodoContext";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "./services/api";
import "./styles/styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fetches todos from backend on component mount
  useEffect(() => {
    const loadTodos = async () => {
      const savedTodos = await getAllTodos();
      setTodos(savedTodos);
    };

    loadTodos();
  }, []);

  // Saves todos to local storage on todos state update
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Toggles dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handles opening the add todo popup
  const handleAddTodoClick = () => {
    setIsPopupOpen(true);
  };

  // Handles adding a new todo
  const handleAddTodo = async (todoText) => {
    const todo = await createTodo({
      text: todoText,
      completed: false,
    });

    setTodos([...todos, todo]);
    setIsPopupOpen(false);
  };

  // Handles deleting a todo
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      const updatedTodoList = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodoList);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Handles editing a todo
  const handleEdit = async (id, newText) => {
    try {
      const updatedTodo = await updateTodo(id, { text: newText });
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedTodo.text } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Handles checkbox change for a todo
  const handleCheckboxChange = async (id) => {
    const todo = todos.find((todo) => todo.id === id);

    const updatedTodo = await updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed,
    });

    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  // Handles closing the add todo popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Handles search term change
  const handleSearchChange = (search) => {
    setSearch(search);
  };

  // Handles filter change
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Filters todos based on search term and filter
  const filteredTodos = todos.filter((todo) => {
    let todoFilter;

    if (filter === "completed") {
      todoFilter = todo.completed;
    } else if (filter === "incomplete") {
      todoFilter = !todo.completed;
    } else {
      todoFilter = true;
    }

    // Check if todo exists and has the text property
    if (todo && todo.text) {
      return (
        todo.text.toLowerCase().includes(search.toLowerCase()) && todoFilter
      );
    }

    return false; // Return false if todo or todo.text is undefined
  });

  return (
    <TodoContextProvider>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <div className="app-content">
          <h1>Final Project Todo App</h1>
          <div className="form-container">
            <FilterBar
              handleSearchChange={handleSearchChange}
              handleFilterChange={handleFilterChange}
              darkMode={darkMode}
            />
            <ThemeToggle
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
            {isPopupOpen && (
              <AddTodoPopup onClose={handleClosePopup} onAdd={handleAddTodo} />
            )}
            <div className="add-todo-icon" onClick={handleAddTodoClick}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
          <TodoList
            todos={filteredTodos}
            handleCheckboxChange={handleCheckboxChange}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
