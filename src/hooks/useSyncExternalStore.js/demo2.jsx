// This example listens for changes in localStorage (such as a theme change) and updates the UI accordingly.

import { useSyncExternalStore } from "react";

// Function to subscribe to storage changes
const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

// Function to get the current theme from localStorage
const getSnapshot = () => localStorage.getItem("theme") || "light";

function ThemeTracker() {
  // Using useSyncExternalStore to track theme changes
  const theme = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>   
    <h1>2. Syncing with Local Storage</h1>
      <h2>Current Theme</h2>
      <p>{theme}</p>
    </div>
  );
}

export default ThemeTracker;
