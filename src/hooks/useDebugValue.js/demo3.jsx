// This example displays user authentication status in DevTools.

import { useState, useDebugValue } from "react";

// Custom authentication hook
function useAuth() {
  // State to store user info (null if not logged in)
  const [user, setUser] = useState(null);

  // Display user authentication status in React DevTools
  useDebugValue(user ? `Logged in as: ${user.name}` : "Not Logged In");

  // Function to log in a user by setting their name
  const login = (name) => setUser({ name });

  // Function to log out a user (reset user state to null)
  const logout = () => setUser(null);

  // Return user state and authentication functions
  return { user, login, logout };
}

// Main authentication component
export default function AuthComponent() {
  // Use the custom `useAuth` hook
  const { user, login, logout } = useAuth();

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>3. Debugging User Authentication Hook</h1>
      {/* Display user status */}
      <p>{user ? `Welcome, ${user.name}!` : "Please log in."}</p>

      {/* Login button sets user to "Dixita" */}
      <button onClick={() => login("Dixita")}>Log In</button>

      {/* Logout button resets user to null */}
      <button onClick={logout}>Log Out</button>
    </div>
  );
}
