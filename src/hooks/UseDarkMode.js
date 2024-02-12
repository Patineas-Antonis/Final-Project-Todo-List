// useDarkMode.js

/**
 * Custom hook for managing dark mode state.
 * @returns {Object} - Object containing dark mode state and toggle function.
 */
import { useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggles dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};

export { useDarkMode };
