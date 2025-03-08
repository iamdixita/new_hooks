// This example shows how to display the current theme (light or dark) in React DevTools.

import { useState, useDebugValue } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  // Display the theme in React DevTools for better debugging
  useDebugValue(theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode");

  return [theme, setTheme];
}

function ThemeComponent() {
  const [theme, setTheme] = useTheme();

  // Set background color based on theme
  const themeStyles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "1rem",
    marginTop: "1rem",
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <div style={themeStyles}>
      <h1>Debugging a Theme Hook</h1>
      <p>Current Theme: {theme}</p>
      <button 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#333" : "#f5f5f5",
          color: theme === "light" ? "#fff" : "#000",
          borderRadius: "5px",
          transition: "all 0.3s ease-in-out"
        }}
      >
        Toggle Theme
      </button>
    </div>
    </div>
  );
}

export default ThemeComponent;
