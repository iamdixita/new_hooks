// Use Case: Inject Google Fonts dynamically before rendering.

import { useInsertionEffect } from "react"; // Importing `useInsertionEffect` hook

export default function DynamicFont() {
  useInsertionEffect(() => {
    // Create a new <link> tag dynamically
    const link = document.createElement("link");

    // Set the `href` to the Google Fonts API URL for the Poppins font
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap";
    link.rel = "stylesheet"; // Mark it as a stylesheet link

    // Append the <link> tag to the document's <head> to load the font
    document.head.appendChild(link);

    // Cleanup function: Remove the font link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Runs only once when the component mounts

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
     <h1>5. Dynamic Font Injection</h1>
    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px" }}>
      Dynamic Font Loaded
    </p>
    </div>
  );
}
