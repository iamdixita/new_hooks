// Use Case: Instantly display a form submission while processing.

import { useState, useOptimistic } from "react";

export default function ContactForm() {
  // State to store actual form submissions after confirmation from the server
  const [submissions, setSubmissions] = useState([]);

  // Optimistic state: Updates UI instantly before the server confirms
  const [optimisticSubmissions, addOptimisticSubmission] = useOptimistic(
    submissions, 
    (prev, newSubmission) => [newSubmission, ...prev] // Add new submission at the top
  );

  // Function to handle form submission
  const handleSubmit = async () => {
    const formData = { name: "Dixita Rana", message: "Hello!" };

    // Optimistically update UI immediately before waiting for the server response
    addOptimisticSubmission(formData);

    try {
      // Simulating a form submission API call
      await fetch("/api/submit-form", { method: "POST", body: JSON.stringify(formData) });

      // If the request succeeds, update the actual submissions state
      setSubmissions((prev) => [formData, ...prev]);
    } catch {
      alert("Failed to submit form!"); // Handle failure scenario
    }
  };

  return (
    <div  style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>5. Optimistic UI for Form Submission</h1>
      {/* Button to trigger form submission */}
      <button onClick={handleSubmit}>Submit Form</button>

      {/* Display submitted entries (both optimistic and confirmed submissions) */}
      <ul>
        {optimisticSubmissions.map((entry, index) => (
          <li key={index}>{entry.name}: {entry.message}</li>
        ))}
      </ul>
    </div>
  );
}
