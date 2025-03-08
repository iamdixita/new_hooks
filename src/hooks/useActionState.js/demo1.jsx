// This example handles a basic form submission with success and error messages.

"use client"; // Ensures the component runs on the client side

import { useActionState } from "react";

// Predefined credentials for authentication
const username = "guest";
const password = "10";

// Function to handle form submission
async function submitForm(prevState, formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Convert form data (FormData object) into a regular JavaScript object
      const data = Object.fromEntries(formData);

      // Check if the entered credentials match the predefined ones
      if (data.username === username && data.password === password) {
        resolve({ success: true, message: "Login successful!" }); // Success response
      } else {
        resolve({ success: false, message: "Invalid username or password!" }); // Error response
      }
    }, 1000); // Simulated delay to mimic a real API request
  });
}

// React component for the login form
export default function RegisterForm() {
  // useActionState manages the form's submission state
  const [state, action] = useActionState(submitForm, null);

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
        <h1>1. Form Submission with Success & Error Handling</h1>
        <form action={action}>
      {/* Input field for username */}
      <input name="username" placeholder="Username" required />
      
      {/* Input field for password */}
      <input type="password" name="password" placeholder="Password" required />
      
      {/* Login button */}
      <button type="submit">Login</button>

      {/* Display success or error message after form submission */}
      {state && <p style={{ color: state.success ? "green" : "red" }}>{state.message}</p>}
    </form>
    </div>
  );
}
