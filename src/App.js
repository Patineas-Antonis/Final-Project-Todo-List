import React, { useState, useEffect } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import ThemeToggle from "./components/ThemeToggle";
import AddTodoPopup from "./components/AddTodoPopup";
import "./styles/styles.css";
import { createTodo, getAllTodos, updateTodo } from "./services/api";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [todos, setTodos] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    const loadTodos = async () => {
      const savedTodos = await getAllTodos();
      setTodos(savedTodos);
    };

    loadTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const newTodoText = e.target.elements.todo.value.trim();
    if (newTodoText) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodoText, completed: false },
      ]);
      e.target.elements.todo.value = "";
    }
  };

  const handleAddTodoClick = () => {
    setIsPopupOpen(true);
  };

  const handleAddTodo = async (todoText) => {
    const todo = await createTodo({
      text: todoText,
      completed: false
    });

    setTodos([...todos, todo]);
    setIsPopupOpen(false);
  };

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

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSearchChange = (search) => {
    setSearch(search);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    let todoFilter;

    if (filter === "completed") {
      todoFilter = todo.completed;
    } else if (filter === "incomplete") {
      todoFilter = !todo.completed;
    } else {
      todoFilter = true;
    }

    return todo.text.toLowerCase().includes(search.toLowerCase()) && todoFilter;
  });

  return (
    <TodoContextProvider>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <div className="app-content">
          <h1>Final Project Todo App</h1>
          <div className="form-container">
            <form onSubmit={handleSearchSubmit}></form>
            {}
            <FilterBar
              handleSearchChange={handleSearchChange}
              handleFilterChange={handleFilterChange}
            />
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {}
            {isPopupOpen && (
              <AddTodoPopup onClose={handleClosePopup} onAdd={handleAddTodo} />
            )}
            <div className="add-todo-icon" onClick={handleAddTodoClick}>
              <i className="fas fa-plus"></i> {}
            </div>
          </div>
          <TodoList
            todos={filteredTodos}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
