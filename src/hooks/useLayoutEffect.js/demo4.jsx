// This example ensures the page doesn’t jump to the top when new data loads.

import { useState, useLayoutEffect } from "react";

export default function ScrollPreserve() {
  // State to store a list of data
  const [data, setData] = useState([
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
  ]);

  // State to store scroll position
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    // Restore the previous scroll position before the browser repaints
    window.scrollTo(0, scrollY);
  }, [data]); // Runs when `data` updates

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>4. Preserving Scroll Position After Data Update</h1>
      <button
        onClick={() => {
          setScrollY(window.scrollY); // Save current scroll position
          setData((prevData) => [
            ...prevData,
            `New Item ${prevData.length + 1}`,
          ]); // Append new data
        }}
      >
        Fetch More Data
      </button>

      {/* A long list of items to create scrolling effect */}
      <ul>
        {data.map((item, index) => (
          <li key={index} style={{ padding: "1rem", borderBottom: "1px solid gray" }}>
            {item}
          </li>
        ))}
      </ul>

      {/* Simulated long page content */}
      <div style={{ height: "60vh", background: "lightgray" }}>
        Scroll down to test
      </div>
    </div>
  );
}




