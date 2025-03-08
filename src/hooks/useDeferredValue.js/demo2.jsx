// This example optimizes rendering of a long list.

import { useState, useDeferredValue } from "react"; // Importing hooks

// Component that generates and displays a large list (10,000 items)
function List({ value }) {
  return (
    <ul>
      {Array.from({ length: 10000 }, (_, i) => (
        <li key={i}>{value}</li> // Displaying the deferred text in each list item
      ))}
    </ul>
  );
}

export default function Listvalue() {
  const [text, setText] = useState(""); // State to store input value
  const deferredText = useDeferredValue(text); // Deferring updates for performance optimization

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>2. Preventing Slow Rendering in a List</h1>
      {/* Input field for user to type text */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} // Updates state on input change
      />
      
      {/* Passes the deferred text value to the List component */}
      <List value={deferredText} />
    </div>
  );
}
