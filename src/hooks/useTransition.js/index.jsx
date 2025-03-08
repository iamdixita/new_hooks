import React, { useState } from "react";
import SlowCounter from "./demo1";
import FilteredList from "./demo2";
import NavigationExample from "./demo3";
import SortedList from "./demo4";
import MultiComponentUpdate from "./demo5";

function UseTransitionEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useTransition Hook Examples</header>
      <h2>Definition of useTransition:</h2>
      <h3>
      The useTransition hook in React is used for managing state transitions in a non-blocking way. <br></br>
      It helps prioritize updates, making the UI more responsive by allowing low-priority updates (such as expensive re-renders) <br></br>
      to be deferred while high-priority updates (like user interactions) happen immediately.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("SlowCounter")}>Slow Counters</button>
        {visibleDemo === "SlowCounter" && <SlowCounter />}

        <button onClick={() => toggleDemo("FilteredList")}>Filtered List</button>
        {visibleDemo === "FilteredList" && <FilteredList />}

        <button onClick={() => toggleDemo("NavigationExample")}>Navigation Example</button>
        {visibleDemo === "NavigationExample" && <NavigationExample />}

        <button onClick={() => toggleDemo("SortedList")}>Sorted List</button>
        {visibleDemo === "SortedList" && <SortedList />}

        <button onClick={() => toggleDemo("MultiComponentUpdate")}>Multi ComponentUpdate</button>
        {visibleDemo === "MultiComponentUpdate" && <MultiComponentUpdate />}
      </div>
    </div>
  );
}

export default UseTransitionEXamples;
