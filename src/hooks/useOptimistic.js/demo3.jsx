// Use Case: Instantly display new tasks before storing them in a database.

import { useState, useOptimistic } from "react";

export default function TodoList() {
  // State to store actual confirmed tasks
  const [tasks, setTasks] = useState(["Buy groceries", "Study React"]);

  // Optimistic state update for tasks: updates UI before confirmation
  const [optimisticTasks, addOptimisticTask] = useOptimistic(tasks, (prev, newTask) => [
    newTask, // Add the new task at the top of the list optimistically
    ...prev, // Retain previous tasks
  ]);

  // Function to add a new task
  const addTask = async (task) => {
    addOptimisticTask(task); // Display the new task immediately in the UI

    try {
      // Simulate an API request to add the task
      await fetch("/api/add-task", { method: "POST", body: JSON.stringify({ task }) });

      // If successful, update the actual state
      setTasks((prev) => [task, ...prev]);
    } catch {
      alert("Failed to add task!"); // Handle failure scenario
    }
  };

  return (
    <div  style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>3. Optimistic To-Do List</h1>
      {/* Button to add a new task */}
      <button onClick={() => addTask("New Task")}>Add Task</button>

      {/* Display the list of tasks (optimistic and confirmed) */}
      <ul>
        {optimisticTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
