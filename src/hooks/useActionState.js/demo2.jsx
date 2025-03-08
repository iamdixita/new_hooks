// Handles file uploads and displays progress updates.

"use client";

import { useActionState } from "react";

// Function to handle file upload
async function uploadFile(prevState, formData) {
  const file = formData.get("file"); // Get file from form
  if (!file) return { error: "No file selected" };

  // Simulate file upload delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Return success message with uploaded file name
  return { success: true, message: `File ${file.name} uploaded!` };
}

export default function FileUploader() {
  const [state, action] = useActionState(uploadFile, null);

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>2. File Upload with Progress Status</h1>
    <form action={action}>
      <input type="file" name="file" required />
      <button type="submit">Upload</button>

      {/* Display success or error message */}
      {state && <p>{state.message}</p>}
    </form>
    </div>
  );
}
