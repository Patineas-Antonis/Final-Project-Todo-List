// ThemeToggle.js
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
