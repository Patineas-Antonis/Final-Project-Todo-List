// api.js

/**
 * API functions for interacting with the todo backend.
 */
const baseUrl = "http://localhost:4200";

export const getAllTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  return response.json();
};

export const updateTodo = async (id, todo) => {
  const response = await fetch(`${baseUrl}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${baseUrl}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
};
