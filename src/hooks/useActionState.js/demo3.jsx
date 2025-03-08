// Updates the like count instantly before the server confirms.

"use client";

import { useActionState } from "react";

// Function to handle liking a post
async function likePost(prevState) {
  return { likes: (prevState?.likes || 0) + 1 }; // Optimistically update the like count
}

export default function LikeButton() {
  const [state, action] = useActionState(likePost, { likes: 0 });

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>3. Like Button with Optimistic UI</h1>
      {/* Clicking the button updates the like count immediately */}
      <button onClick={action}>👍 Like ({state.likes})</button>
    </div>
  );
}
