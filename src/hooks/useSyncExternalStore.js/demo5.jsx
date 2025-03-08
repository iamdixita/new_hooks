// This example demonstrates how to fetch and manage API data using useSyncExternalStore in React. 
// It creates an external store (apiStore) that fetches data from an API and notifies subscribed components when the data updates.

import { useSyncExternalStore } from "react";

// External store to manage API data
const apiStore = {
  data: null, // Initially null
  listeners: new Set(),

  // Function to fetch API data
  async fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      
      // ✅ Correctly assign the result to apiStore
      Object.assign(apiStore, { data: result });

      // Notify all subscribed listeners
      apiStore.listeners.forEach((listener) => listener());
    } catch (error) {
      console.error("API Fetch Error:", error);
    }
  },

  // Function to subscribe to store updates
  subscribe(callback) {
    apiStore.listeners.add(callback);
    return () => apiStore.listeners.delete(callback);
  },

  // ✅ Ensure a default value to avoid undefined errors
  getSnapshot() {
    return apiStore.data || { title: "Loading...", body: "Fetching data..." };
  },
};

// Fetch data when the component mounts
apiStore.fetchData();

function APIFetchComponent() {
  // Using useSyncExternalStore to track API data updates
  const data = useSyncExternalStore(apiStore.subscribe, apiStore.getSnapshot);

  return (
    <div>
      <h2>API Fetched Data</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export default APIFetchComponent;
