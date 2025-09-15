import { Link } from "react-router-dom";

function ItemList({ productos }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className="itemlist__grid">
      {productos.map((prod) => (
        <div key={prod.id} className="itemlist__card">
          <h4>{prod.nombre}</h4>
          <p>$ {prod.precio}</p>
          <Link to={`/item/${prod.id}`} className="itemlist__detalle">
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
