// Use Case: Add global styles dynamically before the component renders.

import { useInsertionEffect } from "react";

export default function GlobalStyles() {
  useInsertionEffect(() => {
    // Create a new <style> tag dynamically
    const styleTag = document.createElement("style");

    // Define global CSS styles inside the <style> tag
    styleTag.innerHTML = `
      body {
        font-family: Arial, sans-serif;
        background-color:rgb(170, 62, 62);
      }
    `;

    // Append the <style> tag to the document's <head> section
    document.head.appendChild(styleTag);

    // Cleanup function: Remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // Runs only once when the component mounts

  return(
  <>
  <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
  <h1>1. Injecting Global CSS Styles Dynamically</h1>
  <h2>Global Styles Applied!</h2>
  {/* Display a heading to indicate styles are applied */}
  </div>
  </>
  );
}
