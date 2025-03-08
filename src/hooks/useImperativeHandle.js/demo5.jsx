// Use Case: The parent starts, stops, and resets a timer.

import { useRef, useImperativeHandle, useState, forwardRef } from "react";

// Timer component that allows the parent component to start, stop, and reset the timer
const Timer = forwardRef((props, ref) => {
  const [time, setTime] = useState(0); // State to track elapsed time
  const timerRef = useRef(null); // Use ref to persist the interval reference

  // Expose methods to the parent component using `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    start: () => {
      if (!timerRef.current) { // Prevent multiple intervals from being set
        timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
      }
    },
    stop: () => {
      clearInterval(timerRef.current);
      timerRef.current = null; // Reset the interval reference
    },
    reset: () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTime(0); // Reset time to 0
    },
  }));

  return <h1>Timer: {time}s</h1>; // Display the elapsed time
});

// Parent component that controls the `Timer`
export default function ParentTimer() {
  const timerRef = useRef(); // Create a ref to store the `Timer` component reference

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
      <h1>5. Custom Timer Component</h1>
      {/* Render the Timer component and pass the ref */}
      <Timer ref={timerRef} />

      {/* Buttons to control the timer */}
      <button onClick={() => timerRef.current.start()}>Start</button>
      <button onClick={() => timerRef.current.stop()}>Stop</button>
      <button onClick={() => timerRef.current.reset()}>Reset</button>
    </div>
  );
}
