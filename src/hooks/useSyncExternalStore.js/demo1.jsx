// Definition: This example tracks the window size in real-time and updates the UI whenever the browser is resized. 
// It ensures that the UI always displays the latest window dimensions.

import { useSyncExternalStore } from "react";

// Subscribe to window resize events
const subscribe = (callback) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

// ✅ Ensure getSnapshot returns a stable reference
const getSnapshot = () => `${window.innerWidth}x${window.innerHeight}`;

function WindowSize() {
  // useSyncExternalStore to track window size changes
  const size = useSyncExternalStore(subscribe, getSnapshot);

  // ✅ Parse width and height from the string
  const [width, height] = size.split("x");

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
      <h1>1. Managing Window Resize Event</h1>
      <h2>Window Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default WindowSize;
