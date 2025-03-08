// Use Case: A parent component can focus the child input field.

import { useRef, useImperativeHandle, forwardRef } from "react";

// `CustomInput` is a child component that allows the parent to control its behavior
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(); // Create a reference to the actual input element

  // Expose specific methods (`focus` and `clear`) to the parent component
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(), // Method to focus the input
    clear: () => (inputRef.current.value = ""), // Method to clear the input value
  }));

  return <input ref={inputRef} {...props} />; // Attach `ref` to the input field
});

// Parent component that uses `CustomInput`
export default function ParentComponent() {
  const inputRef = useRef(); // Create a reference to be passed to `CustomInput`

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>1. Controlling a Custom Input Component</h1>
      {/* Pass `inputRef` to `CustomInput`, allowing the parent to control it */}
      <CustomInput ref={inputRef} placeholder="Type here..." />

      {/* Clicking this button calls `focus()` method defined in `useImperativeHandle` */}
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      {/* Clicking this button calls `clear()` method defined in `useImperativeHandle` */}
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
}
