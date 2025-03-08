// Use Case: Optimize CSS injection for Emotion (a popular CSS-in-JS library).

/** @jsxImportSource @emotion/react */
// This enables Emotion's CSS-in-JS support for this file

import { css } from "@emotion/react"; // Import `css` function from Emotion
import { useInsertionEffect } from "react"; // Import `useInsertionEffect` hook from React

export default function EmotionComponent() {
  useInsertionEffect(() => {
    // This effect runs before React renders the component
    console.log("Injecting Emotion styles before rendering...");
  }, []); // Runs only once when the component mounts

  // Define button styles using Emotion's `css` function
  const buttonStyle = css`
    background-color: blue; /* Button background color */
    color: white; /* Text color */
    padding: 10px 20px; /* Spacing inside the button */
    border: none; /* Remove default border */
    cursor: pointer; /* Change cursor to pointer on hover */
  `;

  return(
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
     <h1>2. CSS-in-JS: Emotion Styled Components</h1>
  <button css={buttonStyle}>Styled with Emotion</button>
  {/* // Apply styles to the button */}
  </div>
  ); 
}
