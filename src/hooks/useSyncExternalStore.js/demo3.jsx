// This example demonstrates how to track and display a user's online/offline status in real-time using useSyncExternalStore in React. 
// It listens for online and offline events and updates the UI accordingly.

import { useSyncExternalStore } from "react"; // Import the hook to sync with external store

// Function to subscribe to online/offline events
function subscribe(callback) {
  // Listen for "online" event and trigger the callback
  window.addEventListener("online", callback);
  
  // Listen for "offline" event and trigger the callback
  window.addEventListener("offline", callback);

  // Cleanup function to remove event listeners when component unmounts
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

// Function to get the current network status
function getSnapshot() {
  return navigator.onLine; // Returns `true` if online, `false` if offline
}

// React component to display online/offline status
export default function OnlineStatus() {
  // useSyncExternalStore ensures UI updates when network status changes
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return(
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
        <h1>3. Reacting to Online/Offline Status</h1>
        <p>Status: {isOnline ? "Online" : "Offline"}</p>
        {/* // Display the current status */}
    </div>
  );
}
