import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="item">
      <h3>{producto.name}</h3>
      <p>Precio: ${producto.price}</p>
      <Link to={`/item/${producto.id}`} className="item__detalle">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;
