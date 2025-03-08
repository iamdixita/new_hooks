// This hook tracks network status and logs it in DevTools.

import { useState, useEffect, useDebugValue } from "react";

// Custom hook to track online/offline status
function useOnlineStatus() {
  // Initialize state with the current online status
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Effect to listen for online/offline events
  useEffect(() => {
    // Function to update the online status
    const updateStatus = () => setIsOnline(navigator.onLine);

    // Add event listeners for network status changes
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []); // Empty dependency array ensures the effect runs only once when mounted

  // Display the online status in React DevTools for debugging
  useDebugValue(isOnline ? "🟢 Online" : "🔴 Offline");

  // Return the online status
  return isOnline;
}

// Component to display network status
export default function NetworkComponent() {
  // Use the custom hook to get the online status
  const isOnline = useOnlineStatus();

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>4. Debugging a Hook for Online/Offline Status</h1>
      {/* Display network status */}
      <p>Network Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
