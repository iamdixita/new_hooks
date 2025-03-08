import React, { useState } from "react";
import RegisterForm from "./demo1";
import FileUploader from "./demo2";
import LikeButton from "./demo3";
import LoginForm from "./demo4";
import CommentSection from "./demo5";

function UseActionStateEXamples() {
  const [visibleDemo, setVisibleDemo] = useState(null);

  const toggleDemo = (demoName) => {
    setVisibleDemo(visibleDemo === demoName ? null : demoName);
  };

  return (
    <div className="container">
      <header>useActionState Hook Examples</header>
      <h2>Definition of useActionState:</h2>
      <h3>
      useActionState is a React 19 hook that helps manage the state of server actions in React Server Components. <br></br>
      It is designed to handle form submissions and other asynchronous actions while maintaining state across re-renders. <br></br>
      It enables efficient state management, error handling, and loading indicators in React apps.
      </h3>

      <div className="demo-list">
        <button onClick={() => toggleDemo("RegisterForm")}>Register Form</button>
        {visibleDemo === "RegisterForm" && <RegisterForm />}

        <button onClick={() => toggleDemo("FileUploader")}>File Uploader</button>
        {visibleDemo === "FileUploader" && <FileUploader />}

        <button onClick={() => toggleDemo("LikeButton")}>Like Button</button>
        {visibleDemo === "LikeButton" && <LikeButton />}

        <button onClick={() => toggleDemo("LoginForm")}>Login Form</button>
        {visibleDemo === "LoginForm" && <LoginForm />}

        <button onClick={() => toggleDemo("CommentSection")}>Comment Section</button>
        {visibleDemo === "CommentSection" && <CommentSection />}
      </div>
    </div>
  );
}

export default UseActionStateEXamples;
