import { useState } from "react";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "0.5rem" }}>
        <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((c) => Math.min(stock, c + 1))}>+</button>
      </div>
      <button onClick={() => onAdd(count)} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
