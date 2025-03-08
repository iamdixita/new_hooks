// Use Case: Modify scrollbar styles dynamically before page renders.

import { useInsertionEffect } from "react"; 

export default function ScrollbarStyle() {
  useInsertionEffect(() => {
    // Create a new <style> tag dynamically
    const styleTag = document.createElement("style");

    // Define custom scrollbar styles using CSS
    styleTag.innerHTML = `
      /* Customize the scrollbar width */
      ::-webkit-scrollbar {
        width: 10px; /* Sets the width of the scrollbar */
      }

      /* Customize the scrollbar thumb (the draggable part) */
      ::-webkit-scrollbar-thumb {
        background: blue; /* Sets the thumb color */
        border-radius: 5px; /* Rounds the corners of the thumb */
      }
    `;

    // Append the <style> tag to the document's <head> section
    document.head.appendChild(styleTag);

    // Cleanup function: Remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // Runs only once when the component mounts

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
     <h1>4. Applying Custom Scrollbar Styles</h1>
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      Scroll to see the effect
    </div>
    </div>
  );
}

