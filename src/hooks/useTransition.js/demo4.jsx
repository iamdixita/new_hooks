// This example demonstrates how useTransition is used to handle sorting a large list efficiently by deferring state updates.

import { useState, useTransition } from "react";

// Generating an array of 10,000 items labeled as "Item 1", "Item 2", etc.
const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function SortedList() {
  // State to store the list of items
  const [list, setList] = useState(items);

  // useTransition returns:
  // - isPending: Boolean indicating if a transition is in progress
  // - startTransition: Function to start a transition
  const [isPending, startTransition] = useTransition();

  // Function to shuffle and sort the list randomly
  const sortList = () => {
    // Using startTransition to process sorting as a low-priority update
    startTransition(() => {
      setList([...list].sort(() => Math.random() - 0.5));
    });
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
    <h1>4. Sorting a Large List Smoothly</h1>
      {/* Button to trigger sorting */}
      <button onClick={sortList}>Sort List</button>

      {/* Show "Sorting..." while sorting is in progress */}
      {isPending && <p>Sorting...</p>}

      {/* Displaying only the first 50 items from the sorted list */}
      <ul>
        {list.slice(0, 50).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
