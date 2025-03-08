// A real-time comment system where new comments appear instantly.

"use client";

import { useActionState } from "react";

// Function to handle posting comments
async function postComment(prevState, formData) {
  const newComment = formData.get("comment"); // Get the new comment from the form
  return { comments: [...(prevState?.comments || []), newComment] }; // Add the new comment to the list
}

export default function CommentSection() {
  const [state, action] = useActionState(postComment, { comments: [] });

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>5. Comment System with Live Update</h1>
      <form action={action}>
        <input name="comment" placeholder="Add a comment..." required />
        <button type="submit">Post</button>
      </form>

      {/* Display all comments dynamically */}
      <ul>
        {state.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
