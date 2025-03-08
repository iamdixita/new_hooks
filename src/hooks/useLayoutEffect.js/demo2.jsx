// This example applies the background color immediately to avoid a flash of the wrong theme.

import { useState, useLayoutEffect } from "react";

export default function ThemeSwitcher() {
  // State to store the current theme (light or dark)
  const [theme, setTheme] = useState("light");

  // useLayoutEffect runs synchronously after DOM mutations but before the browser repaints
  useLayoutEffect(() => {
    // Apply the background color immediately before repaint to prevent flickering
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
  }, [theme]); // Runs every time the theme changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>2. Preventing Flicker in Theme Changes</h1>
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </div>
  );
}
