// This hook tracks API call status and logs it in DevTools.

import { useState, useEffect, useDebugValue } from "react";

// Custom hook to fetch data from an API
function useFetch(url) {
  // State to store fetched data
  const [data, setData] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store error messages (if any)
  const [error, setError] = useState(null);

  // useEffect to fetch data when 'url' changes
  useEffect(() => {
    setLoading(true); // Start loading before fetching data
    fetch(url) // Fetch data from the provided URL
      .then(response => response.json()) // Convert response to JSON
      .then(result => {
        setData(result); // Store fetched data
        setLoading(false); // Set loading to false
      })
      .catch(err => {
        setError(err.message); // Store error message if request fails
        setLoading(false); // Set loading to false
      });
  }, [url]); // Effect runs whenever 'url' changes

  // Display API status in React DevTools for debugging
  useDebugValue(loading ? "⏳ Loading..." : error ? `❌ Error: ${error}` : "✅ Data Loaded");

  // Return fetched data, loading state, and error state
  return { data, loading, error };
}

// Component that fetches and displays data
export default function FetchComponent() {
  // Using the custom useFetch hook with a test API
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  // Display loading message while fetching data
  if (loading) return <p>Loading...</p>;

  // Display error message if fetching fails
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>5. Debugging a Hook for Fetching Data</h1>
      <h3>Fetched Data:</h3>
      {/* Display the fetched data */}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
