// This example demonstrates the useTransition hook in React, which is used to prioritize updates and improve UI responsiveness.

// useTransition helps prevent UI blocking when performing expensive state updates.
// It marks certain updates as low priority, ensuring the UI remains smooth and responsive.

import { useState, useTransition } from "react";

export default function SlowCounter() {
  // State to track the count
  const [count, setCount] = useState(0);
  
  // useTransition returns:
  // - isPending: A boolean indicating if a transition is ongoing
  // - startTransition: A function to start a transition update
  const [isPending, startTransition] = useTransition();

  // Function to increment the count
  const handleClick = () => {
    // Start a transition to mark the update as low priority
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
    <h1>1. Prevent UI Freezing While Changing State</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

      {/* Show "Updating..." only when transition is pending */}
      {isPending && <p>Updating...</p>}
    </div>
  );
}
