// Use Case: The parent triggers a scroll-to-bottom action.

import { useRef, useImperativeHandle, forwardRef } from "react";

// `ChatBox` component that allows the parent to control scrolling
const ChatBox = forwardRef((props, ref) => {
  const chatRef = useRef(); // Create a ref for the chat container

  // Expose `scrollToBottom` method to the parent using `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight; // Scrolls to the bottom
    },
  }));

  return (
    <div
      ref={chatRef} // Assigning ref to the div
      style={{
        height: "200px",
        width: "300px",
        overflowY: "auto", // Enables scrolling
        border: "1px solid black",
        padding: "10px",
      }}
    >
      {/* Generating 50 messages dynamically */}
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i}>Message {i + 1}</p>
      ))}
    </div>
  );
});

// Parent component that controls the `ChatBox`
export default function ChatParent() {
  const chatRef = useRef(); // Create a reference for `ChatBox`

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>3. Scroll to Bottom of a Chat Box</h1>
      {/* Render the `ChatBox` and pass the ref */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <ChatBox ref={chatRef} />
</div>

      {/* Button to trigger `scrollToBottom` method */}
      <button onClick={() => chatRef.current.scrollToBottom()}>
        Scroll to Bottom
      </button>
    </div>
  );
}
