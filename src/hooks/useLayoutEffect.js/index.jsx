import React, { useState } from "react";
import MeasureBox from "./demo1";
import ThemeSwitcher from "./demo2";
import AnimatedBox from "./demo3";
import ScrollPreserve from "./demo4";
import Modal from "./demo5";

function UseLayoutEffectEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useLayoutEffect Hook Examples</header>
      <h2>Definition of useLayoutEffect:</h2>
      <h3>
      useLayoutEffect is a React Hook that works similarly to useEffect, 
      but it runs synchronously after all DOM mutations and before the browser paints the screen. <br></br>
      This makes it useful for measuring the DOM, preventing flickering, and applying immediate visual updates.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("MeasureBox")}>Measure Box</button>
        {visibleDemo === "MeasureBox" && <MeasureBox />}

        <button onClick={() => toggleDemo("ThemeSwitcher")}>Theme Switcher</button>
        {visibleDemo === "ThemeSwitcher" && <ThemeSwitcher />}

        <button onClick={() => toggleDemo("AnimatedBox")}>Animated Box</button>
        {visibleDemo === "AnimatedBox" && <AnimatedBox />}

        <button onClick={() => toggleDemo("ScrollPreserve")}>Scroll Preserve</button>
        {visibleDemo === "ScrollPreserve" && <ScrollPreserve />}

        <button onClick={() => toggleDemo("Modal")}>Modal</button>
        {visibleDemo === "Modal" && <Modal />}
      </div>
    </div>
  );
}

export default UseLayoutEffectEXamples;
