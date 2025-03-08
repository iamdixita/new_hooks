// This example demonstrates how useTransition helps in managing UI updates without blocking the main thread when rendering an expensive component.

import { useState, useTransition } from "react";

export default function MultiComponentUpdate() {
  // State to track the counter
  const [count, setCount] = useState(0);

  // useTransition provides:
  // - isPending: Boolean indicating if the UI update is in progress
  // - startTransition: Function to start a transition
  const [isPending, startTransition] = useTransition();

  // Function to increment count inside a transition
  const handleClick = () => {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <div>
      {/* Button to trigger count update */}
      <button onClick={handleClick}>Increment</button>

      {/* Show "Updating UI..." while the transition is in progress */}
      {isPending && <p>Updating UI...</p>}

      {/* Render the expensive component that depends on count */}
      <ExpensiveComponent count={count} />
    </div>
  );
}

// ExpensiveComponent: Generates and renders a list of numbers
function ExpensiveComponent({ count }) {
  // Create an array of 5000 numbers starting from 'count'
  let items = Array.from({ length: 5000 }, (_, i) => i + count);

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
        <h1>5. Updating a Complex UI While Keeping Interaction Smooth</h1>
    <ul>
      {/* Display only the first 50 items for better performance */}
      {items.slice(0, 50).map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
    </div>
  );
}
