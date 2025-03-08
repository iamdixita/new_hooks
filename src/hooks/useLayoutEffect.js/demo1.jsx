// This example measures the width of a box before rendering to ensure no flickering.

import { useState, useRef, useLayoutEffect } from "react";

export default function MeasureBox() {
  // State to store the measured width of the box
  const [width, setWidth] = useState(0);

  // useRef to get a reference to the box div
  const boxRef = useRef(null);

  // useLayoutEffect runs synchronously after DOM mutations but before the browser repaints
  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth); // Measure width before the browser paints
    }
  }, []); // Runs only once after the initial render

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>1. Measuring an Element’s Size Before Rendering</h1>
      {/* This div is the box whose width we measure */}
      <div ref={boxRef} style={{ width: "50%", background: "orange", padding: "20px", marginLeft:"24rem" }}>
        Resize me!
      </div>
      {/* Display the measured width */}
      <p>Box Width: {width}px</p>
    </div>
  );
}
