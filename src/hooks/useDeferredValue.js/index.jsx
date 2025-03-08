import React, { useState } from "react";
import Search from "./demo1";
import Listvalue from "./demo2";
import Heavy from "./demo3";
import Filter from "./demo4";
import Gallery from "./demo5";

function UseDeferredValueEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useDeferredValue Hook Examples</header>
      <h2>Definition of useDeferredValue:</h2>
      <h3>
      useDeferredValue is a React hook introduced in React 18 to defer updates of a value to improve performance. <br></br>
      It helps prioritize rendering by preventing unnecessary re-renders of low-priority updates.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("Search")}>Search Component</button>
        {visibleDemo === "Search" && <Search />}

        <button onClick={() => toggleDemo("Listvalue")}>List value </button>
        {visibleDemo === "Listvalue" && <Listvalue />}

        <button onClick={() => toggleDemo("Heavy")}>Heavy Component:</button>
        {visibleDemo === "Heavy" && <Heavy />}

        <button onClick={() => toggleDemo("Filter")}>Filtered List</button>
        {visibleDemo === "Filter" && <Filter />}

        <button onClick={() => toggleDemo("Gallery")}>Gallery Image</button>
        {visibleDemo === "Gallery" && <Gallery />}
      </div>
    </div>
  );
}

export default UseDeferredValueEXamples;
