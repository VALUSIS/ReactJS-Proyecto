import ItemCount from "./ItemCount";

function ItemDetail({ producto, onAdd }) {
  if (!producto) return <p>Cargando...</p>;

  const handleAdd = (cantidad) => {
    onAdd(producto, cantidad); 
  };

  return (
    <div className="itemdetail">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>

      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetail;