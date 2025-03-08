// Use Case: Instantly update the upvote count while waiting for a response from the server.

import { useState, useOptimistic } from "react";

export default function UpvoteButton() {
  // State to track actual upvote count from the server
  const [upvotes, setUpvotes] = useState(42);

  // useOptimistic creates an optimistic state for upvotes
  const [optimisticUpvotes, setOptimisticUpvotes] = useOptimistic(
    upvotes, // Initial state (real upvotes from server)
    (prev, delta) => prev + delta // Function to update optimistic state
  );

  // Function to handle the upvote button click
  const handleUpvote = async () => {
    setOptimisticUpvotes(1); // Optimistically update UI immediately

    try {
      // Simulate API request to update upvote count on the server
      await fetch("/api/upvote", { method: "POST" });

      // If the request is successful, update the actual state
      setUpvotes((prev) => prev + 1);
    } catch {
      // If the request fails, show an error message
      alert("Failed to upvote!");
    }
  };

  return (
    <div  style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>1. Optimistic Upvote System</h1>
    {/* // Button displaying the optimistic upvote count */}
    <button onClick={handleUpvote}>
      👍 {optimisticUpvotes}
    </button>
    </div>
  );
}
