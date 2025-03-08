    // This example demonstrates how to manage state updates using useSyncExternalStore and an EventEmitter in React. 
    // It creates a global event-driven store where a counter value updates and notifies subscribers when the state changes.

    import { useSyncExternalStore } from "react";

    // Use EventTarget instead of EventEmitter
    const emitter = new EventTarget();
    let state = 0;
    
    // Function to subscribe to updates
    function subscribe(callback) {
      const listener = () => callback();
      emitter.addEventListener("update", listener);
      
      return () => emitter.removeEventListener("update", listener);
    }
    
    // Function to get the current state
    function getSnapshot() {
      return state;
    }
    
    // Function to increment the counter
    function increment() {
      state += 1;
      emitter.dispatchEvent(new Event("update")); // Notify listeners
    }
    
    // Counter Component
    export default function EventCounter() {
      const count = useSyncExternalStore(subscribe, getSnapshot);
    
      return (
        <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    }
    