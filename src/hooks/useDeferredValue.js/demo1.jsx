// This example reduces unnecessary re-renders when typing in a search box.

import { useState, useDeferredValue } from "react";

// Component to display the search query
function SearchComponent({ value }) {
  return <p>Searching for: {value}</p>; // Displays the deferred search value
}

export default function Search() {
  const [query, setQuery] = useState(""); // State to store user input
  const deferredQuery = useDeferredValue(query); // Deferring search value for better performance

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>1. Optimizing Search with Deferred Input</h1>
      {/* Input field for user to type search query */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Updates state on input change
      />
      
      {/* Passes the deferred search value to the SearchComponent */}
      <SearchComponent value={deferredQuery} />
    </div>
  );
}
