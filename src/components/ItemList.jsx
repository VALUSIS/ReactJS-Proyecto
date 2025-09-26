import { Link } from "react-router-dom";

function ItemList({ productos }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <ul className="ul">
      {productos.map((prod) => (
        <li key={prod.id} className="ul__li">
          <img src={prod.image} alt={prod.name} className="ul__li--img" />
          <h3>{prod.name}</h3>
          <p>${prod.price}</p>
          <Link to={`/item/${prod.id}`} className="ul__li--btn">
            Ver Detalle
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
