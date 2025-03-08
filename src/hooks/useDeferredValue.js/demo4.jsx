// This example improves filtering performance by deferring the search query.

import { useState, useDeferredValue } from "react";

// Component that filters the list based on the search query
function FilteredList({ query, items }) {
  // Filter items based on whether they include the query string
  const filteredItems = items.filter((item) => item.includes(query));

  return (
    <ul>
      {/* Render filtered items */}
      {filteredItems.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function Filter() {
  // State to store user input
  const [query, setQuery] = useState("");

  // Use useDeferredValue to delay the update of the query
  // This improves performance by preventing frequent re-renders when typing
  const deferredQuery = useDeferredValue(query);

  // List of items to filter
  const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange"];

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>4. Efficient Filtering of a Large List</h1>
      {/* Input field to type search query */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on user input
      />

      {/* Pass deferredQuery to avoid unnecessary renders */}
      <FilteredList query={deferredQuery} items={items} />
    </div>
  );
}
