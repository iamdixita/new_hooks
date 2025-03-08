import React, { useState } from "react";
import ThemeComponent from "./demo1";
import CounterComponent from "./demo2";
import AuthComponent from "./demo3";
import NetworkComponent from "./demo4";
import FetchComponent from "./demo5";

function UseDebugValueEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useDebugValue Hook Examples</header>
      <h2>Definition of useDebugValue:</h2>
      <h3>
      useDebugValue is a React Hook used for debugging custom hooks. <r></r>
      It does not affect the functionality of your application but enhances the debugging experience <br></br>
      in React DevTools by displaying useful information about the internal state of a hook. <br></br>
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("ThemeComponent")}>Theme Component</button>
        {visibleDemo === "ThemeComponent" && <ThemeComponent />}

        <button onClick={() => toggleDemo("CounterComponent")}>Counter Component</button>
        {visibleDemo === "CounterComponent" && <CounterComponent />}

        <button onClick={() => toggleDemo("AuthComponent")}>Auth Component</button>
        {visibleDemo === "AuthComponent" && <AuthComponent />}

        <button onClick={() => toggleDemo("NetworkComponent")}>Network Component</button>
        {visibleDemo === "NetworkComponent" && <NetworkComponent />}

        <button onClick={() => toggleDemo("FetchComponent")}>Fetch Component</button>
        {visibleDemo === "FetchComponent" && <FetchComponent />}
      </div>
    </div>
  );
}

export default UseDebugValueEXamples;
