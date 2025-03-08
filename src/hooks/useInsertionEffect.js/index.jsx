import React, { useState } from "react";
import GlobalStyles from "./demo1";
import EmotionComponent from "./demo2";
import ThemeSwitcher from "./demo3";
import ScrollbarStyle from "./demo4";
import DynamicFont from "./demo5";

function UseInsertionEffectEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useInsertionEffect Hook Examples</header>
      <h2>Definition of useInsertionEffect:</h2>
      <h3>
      useInsertionEffect is a special React Hook introduced in React 18. 
      It is designed specifically for injecting styles before rendering. <br></br>
      It runs before useLayoutEffect and useEffect and is primarily used in CSS-in-JS scenarios.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("GlobalStyles")}>Global Styles</button>
        {visibleDemo === "GlobalStyles" && <GlobalStyles />}

        <button onClick={() => toggleDemo("EmotionComponent")}>Emotion Component</button>
        {visibleDemo === "EmotionComponent" && <EmotionComponent />}

        <button onClick={() => toggleDemo("ThemeSwitcher")}>Theme Switcher</button>
        {visibleDemo === "ThemeSwitcher" && <ThemeSwitcher />}

        <button onClick={() => toggleDemo("ScrollbarStyle")}>Scrollbar Style</button>
        {visibleDemo === "ScrollbarStyle" && <ScrollbarStyle />}

        <button onClick={() => toggleDemo("DynamicFont")}>Dynamic Font</button>
        {visibleDemo === "DynamicFont" && <DynamicFont />}
      </div>
    </div>
  );
}

export default UseInsertionEffectEXamples;
