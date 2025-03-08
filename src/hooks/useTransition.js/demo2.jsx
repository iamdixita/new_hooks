// This example demonstrates how useTransition can be used to improve the performance of filtering a large dataset in React.

import { useState, useTransition } from "react";

// Creating a large array of 10,000 items
const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function FilteredList() {
  // State to track the search query
  const [query, setQuery] = useState("");

  // State to store the filtered results
  const [filteredItems, setFilteredItems] = useState(items);

  // useTransition returns:
  // - isPending: Indicates if the transition is in progress
  // - startTransition: Function to start the transition
  const [isPending, startTransition] = useTransition();

  // Function to handle input changes and filter the list
  const handleSearch = (e) => {
    setQuery(e.target.value); // Update the query immediately

    // Start a transition to update the filtered list with low priority
    startTransition(() => {
      setFilteredItems(items.filter((item) => item.includes(e.target.value)));
    });
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
    <h1>2. Filtering a Large List Without Freezing</h1>
      {/* Search Input Field */}
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Search..." 
      />

      {/* Show "Filtering..." message while transition is pending */}
      {isPending && <p>Filtering...</p>}

      {/* Render only the first 50 filtered items for performance optimization */}
      <ul>
        {filteredItems.slice(0, 50).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
