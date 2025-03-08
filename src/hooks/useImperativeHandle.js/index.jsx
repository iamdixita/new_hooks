import React, { useState } from "react";
import ParentComponent from "./demo1";
import Parent from "./demo2";
import ChatParent from "./demo3";
import ParentVideo from "./demo4";
import ParentTimer from "./demo5";

function UseImperativeHandleEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useImperativeHandle Hook Examples</header>
      <h2>Definition of useImperativeHandle:</h2>
      <h3>
      useImperativeHandle is a React Hook that allows a parent component to customize and expose specific methods or properties of a child component’s ref. <br></br>
      This is useful when you need to control a child component’s behavior from the parent.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("ParentComponent")}>Parent Component</button>
        {visibleDemo === "ParentComponent" && <ParentComponent />}

        <button onClick={() => toggleDemo("Parent")}>Parent</button>
        {visibleDemo === "Parent" && <Parent />}

        <button onClick={() => toggleDemo("ChatParent")}>Chat Parent</button>
        {visibleDemo === "ChatParent" && <ChatParent />}

        <button onClick={() => toggleDemo("ParentVideo")}>Parent Video</button>
        {visibleDemo === "ParentVideo" && <ParentVideo />}

        <button onClick={() => toggleDemo("ParentTimer")}>Parent Timer</button>
        {visibleDemo === "ParentTimer" && <ParentTimer />}
      </div>
    </div>
  );
}

export default UseImperativeHandleEXamples;
