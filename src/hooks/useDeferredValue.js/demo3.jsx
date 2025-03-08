// This example ensures UI remains responsive while processing a heavy component.

import { useState, useDeferredValue } from "react"; // Importing required hooks

// Simulating a slow-rendering component
function HeavyComponent({ value }) {
  let start = performance.now();
  
  // Artificial delay (busy-wait) to simulate heavy computation
  while (performance.now() - start < 200) {} 

  return <p>Processed Value: {value}</p>; // Display the processed input value
}

export default function Heavy() {
  const [input, setInput] = useState(""); // State to store user input
  const deferredInput = useDeferredValue(input); // Deferring input update for performance optimization

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>3. Prioritizing User Input Over Heavy Computation</h1>
      {/* Input field to capture user input */}
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} // Updates state on input change
      />
      
      {/* Rendering the HeavyComponent with deferred input to prevent UI lag */}
      <HeavyComponent value={deferredInput} />
    </div>
  );
}
