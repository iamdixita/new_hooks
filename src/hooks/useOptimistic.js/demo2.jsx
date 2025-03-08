// Use Case: Show items in the cart instantly before confirming with the server.

import { useState, useOptimistic } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState(["Item 1", "Item 2"]); // Initial cart items

  // Optimistic cart update
  const [optimisticCart, addOptimisticItem] = useOptimistic(cart, (prev, newItem) => [...prev, newItem]);

  const addToCart = (item) => {
    addOptimisticItem(item); // Show item in UI immediately

    setTimeout(() => {
      const success = Math.random() > 0.3; // Simulate success/failure (70% chance success)
      if (success) {
        setCart((prev) => [...prev, item]); // Persist item
      } else {
        alert("Failed to add item!"); // Show error message
      }
    }, 2000); // Simulate 2s API delay
  };

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      <button onClick={() => addToCart("New Item")}>Add Item</button>
      <ul>
        {optimisticCart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
