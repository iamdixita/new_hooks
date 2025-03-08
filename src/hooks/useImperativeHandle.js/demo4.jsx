// Use Case: The parent can control video playback.

import { useRef, useImperativeHandle, forwardRef } from "react";

// `VideoPlayer` component that allows the parent to control playback
const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(); // Create a ref for the video element

  // Expose `play`, `pause`, and `reset` methods to the parent using `useImperativeHandle`
  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(), // Play the video
    pause: () => videoRef.current.pause(), // Pause the video
    reset: () => {
      videoRef.current.pause(); // Pause before resetting
      videoRef.current.currentTime = 0; // Reset video to the beginning
    },
  }));

  return (
    <video
      ref={videoRef} // Assigning ref to the video element
      width="300"
      controls // Adds default video controls (play, pause, volume, etc.)
      src="https://www.w3schools.com/html/mov_bbb.mp4" // Sample video source
    />
  );
});

// Parent component that controls the `VideoPlayer`
export default function ParentVideo() {
  const videoRef = useRef(); // Create a reference for `VideoPlayer`

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>4. Video Player Controls (Play, Pause, Reset)</h1>
      {/* Render the `VideoPlayer` and pass the ref */}
      <VideoPlayer ref={videoRef} /><br></br>

      {/* Buttons to trigger play, pause, and reset functions */}
      <button onClick={() => videoRef.current.play()}>Play</button>
      <button onClick={() => videoRef.current.pause()}>Pause</button>
      <button onClick={() => videoRef.current.reset()}>Reset</button>
    </div>
  );
}
