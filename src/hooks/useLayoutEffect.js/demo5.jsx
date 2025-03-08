// This example ensures the modal is correctly positioned before being displayed.

import { useState, useRef, useLayoutEffect } from "react";

export default function Modal() {
  // State to track if the modal is open or closed
  const [open, setOpen] = useState(false);

  // Ref to access the modal element
  const modalRef = useRef(null);

  useLayoutEffect(() => {
    if (open && modalRef.current) {
      // Get modal height dynamically
      const { height } = modalRef.current.getBoundingClientRect();
      // Center the modal vertically before the browser repaints
      modalRef.current.style.top = `calc(50% - ${height / 2}px)`;
    }
  }, [open]); // Runs when `open` state changes

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>5. Centering a Modal Dynamically </h1>
      {/* Button to toggle modal visibility */}
      <button onClick={() => setOpen(!open)}>Toggle Modal</button>

      {/* Modal display logic */}
      {open && (
        <div
          ref={modalRef} // Attach ref to the modal
          style={{
            position: "absolute",
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Adjust horizontal position
            background: "white",
            padding: "20px",
          }}
        >
          Modal Content
        </div>
      )}
    </div>
  );
}
