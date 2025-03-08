import React, { useState } from "react";
import WindowSize from "./demo1";
import ThemeTracker from "./demo2";
import OnlineStatus from "./demo3";
import EventCounter from "./demo4";
import APIFetchComponent from "./demo5";

function UseSyncExternalStoreExamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };
  
  return (
    <div className="container">
      <header>useSyncExternalStore Hook Examples</header>
      <h2>Definition of useSyncExternalStore:</h2>
      <h3>
      The useSyncExternalStore hook is a built-in React hook introduced in React 18. 
      It is designed to manage state that comes from an external store. <br></br> 
      (e.g., global state management libraries like Redux, Zustand, or even browser APIs like window.localStorage).
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("WindowSize")}>Window Size</button>
        {visibleDemo === "WindowSize" && <WindowSize />}

        <button onClick={() => toggleDemo("ThemeTracker")}>Theme Tracker</button>
        {visibleDemo === "ThemeTracker" && <ThemeTracker />}

         <button onClick={() => toggleDemo("OnlineStatus")}>Online Status</button>
        {visibleDemo === "OnlineStatus" && <OnlineStatus />}

        <button onClick={() => toggleDemo("EventCounter")}>Event Counter</button>
        {visibleDemo === "EventCounter" && <EventCounter />}

        <button onClick={() => toggleDemo("APIFetchComponent")}>API Fetch Component</button>
        {visibleDemo === "APIFetchComponent" && <APIFetchComponent />}
      </div>
    </div>
  );
}

export default UseSyncExternalStoreExamples;
