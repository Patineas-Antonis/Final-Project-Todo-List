// ThemeToggle.js

/**
 * Component for toggling between dark and light themes.
 * @param {Object} props - The component props.
 * @param {boolean} props.darkMode - Flag indicating whether dark mode is enabled.
 * @param {Function} props.toggleDarkMode - Function to toggle dark mode.
 * @returns {JSX.Element} - JSX element representing the ThemeToggle component.
 */
import React from "react";
import darkModeIcon from "../styles/mode.png";
import lightModeIcon from "../styles/sun.png";

function ThemeToggle({ darkMode, toggleDarkMode }) {
  const buttonStyle = {
    backgroundImage: `url(${darkMode ? lightModeIcon : darkModeIcon})`,
    backgroundSize: "cover",
    width: "30px", // Adjust the width and height of the button as needed
    height: "30px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyle} onClick={toggleDarkMode} />;
}

export default ThemeToggle;
