function ItemList({ productos }) {
  if (!productos || productos.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem" }}>
      {productos.map(prod => (
        <div key={prod.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
          <h4>{prod.nombre}</h4>
          <p>$ {prod.precio}</p>
          {}
          <a href={`/item/${prod.id}`}>Ver detalle</a>
        </div>
      ))}
    </div>
  );
}

export default ItemList;