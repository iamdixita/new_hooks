// Use Case: A parent component controls when a modal opens/closes.

import { useRef, useImperativeHandle, useState, forwardRef } from "react";

// `Modal` component that allows the parent to control its visibility
const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false); // State to track whether the modal is open or closed

  // Expose `open` and `close` methods to the parent using `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),  // Function to open the modal
    close: () => setOpen(false), // Function to close the modal
  }));

  // Render the modal only if `open` is true
  return open ? (
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "40%",
        background: "white",
        padding: "20px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <h3>Modal Window</h3>
      {/* Close button inside the modal */}
      <button onClick={() => setOpen(false)}>Close</button>
    </div>
  ) : null; // Return `null` when modal is not open
});

// Parent component that controls the `Modal`
export default function Parent() {
  const modalRef = useRef(); // Create a reference to be passed to `Modal`

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>2. Modal Control (Open/Close from Parent)</h1>
      {/* Buttons to control the modal using the ref */}
      <button onClick={() => modalRef.current.open()}>Open Modal</button>
      <button onClick={() => modalRef.current.close()}>Close Modal</button>

      {/* Pass the ref to the `Modal` component */}
      <Modal ref={modalRef} />
    </div>
  );
}

