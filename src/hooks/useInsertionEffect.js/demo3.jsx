// Use Case: Inject different themes dynamically before rendering.

import { useInsertionEffect } from "react"; // Importing `useInsertionEffect` hook

export default function ThemeSwitcher({ theme }) {
  useInsertionEffect(() => {
    // Create a new <style> tag dynamically
    const styleTag = document.createElement("style");

    // Define theme-specific CSS styles inside the <style> tag
    styleTag.innerHTML = `
      .theme-dark {
        background-color: #333; /* Dark mode background */
        color: white; /* Dark mode text color */
      }
      .theme-light {
        background-color: white; /* Light mode background */
        color: black; /* Light mode text color */
      }
    `;

    // Append the <style> tag to the document's <head> to apply the styles
    document.head.appendChild(styleTag);

    // Cleanup function: Remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []); // Runs only once when the component mounts

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
     <h1>3. Dynamically Theming a Component</h1>
    <div className={theme === "dark" ? "theme-dark" : "theme-light"} style={{padding:"2rem"}}>
      Dynamic Theme Applied
    </div>
    </div>
  );
}
