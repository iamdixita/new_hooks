// This example demonstrates how useTransition is used to improve the performance of page navigation by deferring state updates.

import { useState, useTransition } from "react";

export default function NavigationExample() {
  // State to store the currently active page
  const [page, setPage] = useState("Home");

  // useTransition returns:
  // - isPending: Indicates if the transition is in progress
  // - startTransition: Function to start the transition
  const [isPending, startTransition] = useTransition();

  // Function to handle page navigation
  const navigate = (newPage) => {
    // Start a transition to update the page state with low priority
    startTransition(() => {
      setPage(newPage);
    });
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: "1rem", marginTop: "1rem" }}>
    <h1>3. Delayed Navigation Without Blocking UI</h1>
      {/* Navigation Buttons */}
      <nav>
        <button onClick={() => navigate("Home")}>Home</button>
        <button onClick={() => navigate("About")}>About</button>
        <button onClick={() => navigate("Contact")}>Contact</button>
      </nav>

      {/* Show "Loading..." message while transition is pending */}
      {isPending && <p>Loading...</p>}

      {/* Display the selected page */}
      <h1>{page} Page</h1>
    </div>
  );
}
