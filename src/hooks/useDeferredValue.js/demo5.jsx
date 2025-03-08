// This example delays image updates, preventing unnecessary re-renders.

import { useState, useDeferredValue, useEffect } from "react";

function ImageGallery({ searchTerm }) {
  useEffect(() => {
    console.log(`🔄 Rendering ImageGallery with searchTerm: ${searchTerm}`);
  }, [searchTerm]);

  const images = Array.from({ length: 10 }, (_, i) => 
    `https://source.unsplash.com/featured/?${searchTerm}`
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {images.map((src, i) => (
        <img key={i} src={src} alt="Gallery" width={150} height={150} />
      ))}
    </div>
  );
}

export default function Gallery() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log(`⚡ Immediate query update: ${query}`);
  }, [query]);

  useEffect(() => {
    console.log(`🐢 Deferred query update: ${deferredQuery}`);
  }, [deferredQuery]);

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>5. Optimizing an Image Gallery Search</h1>
      <h3>Search Images</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <h4>🔍 Searching for: {deferredQuery}</h4>
      <ImageGallery searchTerm={deferredQuery} />
    </div>
  );
}
