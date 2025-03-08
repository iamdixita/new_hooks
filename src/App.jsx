import React, { useState } from "react";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom';
import UseActionStateEXamples from "./hooks/useActionState.js";
import UseDebugValueEXamples from "./hooks/useDebugValue.js";
import UseDeferredValueEXamples from "./hooks/useDeferredValue.js";
import UseLayoutEffectEXamples from "./hooks/useLayoutEffect.js";
import UseInsertionEffectEXamples from "./hooks/useInsertionEffect.js";
import UseImperativeHandleEXamples from "./hooks/useImperativeHandle.js/index.jsx";
import UseOptimisticEXamples from "./hooks/useOptimistic.js/index.jsx";
import UseSyncExternalStoreExamples from "./hooks/useSyncExternalStore.js/index.jsx";
import UseTransitionEXamples from "./hooks/useTransition.js/index.jsx";

function App() {
    return (
        <div>
          {/* Navigation Links */}
        <nav>
          <ul>   
            <li><Link to="/useActionState">useActionState</Link></li>
            <li><Link to="/useDebugValue">useDebugValue</Link></li>
            <li><Link to="/useDeferredValue">useDeferredValue</Link></li>
            <li><Link to="/useImperativeHandle">useImperativeHandle</Link></li>
            <li><Link to="/useInsertionEffect">useInsertionEffect</Link></li>
            <li><Link to="/useLayoutEffect">useLayoutEffect</Link></li>
            <li><Link to="/useOptimistic">useOptimistic</Link></li>
            <li><Link to="/useSyncExternalStore">useSyncExternalStore</Link></li>
            <li><Link to="/useTransition">useTransition</Link></li>

          </ul>
        </nav>
  
        {/* Routes */}
        <Routes>
          <Route path="/useActionState" element={<UseActionStateEXamples/>} />
          <Route path="/useDebugValue" element={<UseDebugValueEXamples/>} />
          <Route path="/useDeferredValue" element={<UseDeferredValueEXamples/>} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffectEXamples/>} />
          <Route path="/useInsertionEffect" element={<UseInsertionEffectEXamples/>} />
          <Route path="/useImperativeHandle" element={<UseImperativeHandleEXamples/>} />
          <Route path="/useOptimistic" element={<UseOptimisticEXamples/>} />
          <Route path="/useSyncExternalStore" element={<UseSyncExternalStoreExamples/>} />
          <Route path="/useTransition" element={<UseTransitionEXamples/>} />
          <Route path="/" element={<h2 style={{textAlign:"center",marginTop:"10rem",fontSize:"2rem"}}>Select a Hook Example</h2>} />
        </Routes>
      </div>
    );
  }
  
export default App;
