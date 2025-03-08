// This example ensures smooth movement without lag using useLayoutEffect.

import { useState, useLayoutEffect } from "react";

export default function AnimatedBox() {
  // State to track the box's position
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    // Moves the box every 100ms
    const id = setInterval(() => {
      setPosition((prev) => prev + 5); // Increment position by 5px
    }, 100);

    return () => clearInterval(id); // Cleanup function to clear interval on unmount
  }, []); // Runs only once after initial render

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>3. Animating a Moving Box Smoothly</h1>
    <div 
      style={{ 
        transform: `translateX(${position}px)`, // Moves the box along X-axis
        transition: "transform 0.1s" // Smooth movement effect
      }}
    >
      📦 Moving Box
    </div>
    </div>
  );
}
