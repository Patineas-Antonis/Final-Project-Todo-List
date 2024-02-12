// TodoContext.js

/**
 * Context for managing todo state.
 */
import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return { ...state, todos: action.payload };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
