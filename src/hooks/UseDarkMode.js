import { useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Toggle dark mode
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
};

export { useDarkMode };
