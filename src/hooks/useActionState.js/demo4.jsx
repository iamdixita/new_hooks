// Displays a loading message while processing the login request.

"use client";

import { useActionState } from "react";

// Function to handle login
async function login(prevState, formData) {
  // Show loading state
  await new Promise((resolve) => setTimeout(resolve, 100)); // Short delay to ensure UI updates
  prevState.loading = true; // Set loading state

  // Simulating network delay (2 seconds)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return success message after delay
  return { success: true, message: "Logged in successfully!", loading: false };
}

export default function LoginForm() {
  const [state, action] = useActionState(login, { loading: false });

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
      <h1>Login Form with Loading Indicator</h1>
      <form action={action}>
        <input name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" disabled={state?.loading}>
          {state?.loading ? "Logging in..." : "Login"}
        </button>

        {/* Display success message after loading */}
        {state?.success && <p style={{ color: "green" }}>{state.message}</p>}
      </form>
    </div>
  );
}
