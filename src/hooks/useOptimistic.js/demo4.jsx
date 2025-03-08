// Use Case: Hide an item instantly before confirming deletion.

import { useState, useOptimistic } from "react";

export default function TaskList() {
  // State to store actual confirmed tasks
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  // Optimistic state: Updates UI instantly before confirmation from the server
  const [optimisticTasks, removeOptimisticTask] = useOptimistic(
    tasks,
    (prev, taskToRemove) => prev.filter((task) => task !== taskToRemove) // Remove task optimistically
  );

  // Function to delete a task
  const deleteTask = async (task) => {
    removeOptimisticTask(task); // Remove task from UI immediately

    try {
      // Simulating an API request to delete the task
      await fetch("/api/delete-task", { method: "DELETE", body: JSON.stringify({ task }) });

      // If request succeeds, update the actual state
      setTasks((prev) => prev.filter((t) => t !== task));
    } catch {
      alert("Failed to delete task!"); // Handle failure scenario
    }
  };

  return (
<div  style={{backgroundColor:"lightgray", padding:"1rem", marginTop:"1rem"}}>
    <h1>4. Optimistic Deletion of a List Item</h1>
    <ul>
      {/* Display all tasks (both optimistic and confirmed) */}
      {optimisticTasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => deleteTask(task)}>❌</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
