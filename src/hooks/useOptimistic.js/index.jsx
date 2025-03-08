import React, { useState } from "react";
import UpvoteButton from "./demo1";
import ShoppingCart from "./demo2";
import TodoList from "./demo3";
import TaskList from "./demo4";
import ContactForm from "./demo5";

function UseOptimisticEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useOptimistic Hook Examples</header>
      <h2>Definition of useOptimistic:</h2>
      <h3>
      useOptimistic is a React Hook introduced in React 18 that helps manage optimistic UI updates. 
      It allows you to update the UI immediately, <br></br> while waiting for a server response, making applications feel more responsive.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("UpvoteButton")}>Upvote Button</button>
        {visibleDemo === "UpvoteButton" && <UpvoteButton />}

        <button onClick={() => toggleDemo("ShoppingCart")}>Shopping Cart</button>
        {visibleDemo === "ShoppingCart" && <ShoppingCart />}

        <button onClick={() => toggleDemo("TodoList")}>Todo List</button>
        {visibleDemo === "TodoList" && <TodoList />}

        <button onClick={() => toggleDemo("TaskList")}>Task List</button>
        {visibleDemo === "TaskList" && <TaskList />}

        <button onClick={() => toggleDemo("ContactForm")}>Contact Form</button>
        {visibleDemo === "ContactForm" && <ContactForm />}
      </div>
    </div>
  );
}

export default UseOptimisticEXamples;
