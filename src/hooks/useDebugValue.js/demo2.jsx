// In this example, useDebugValue is used to format the counter value for debugging.

import { useState, useDebugValue } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // Display formatted count value in React DevTools
  useDebugValue(count, value => `Current Count: ${value}`);

  return [count, setCount];
}

export default function CounterComponent() {
  const [count, setCount] = useCounter(5);

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>2. Debugging a Counter Hook</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
