
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  const { addItem, isInCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {

    addItem({
      id: producto.id,
      name: producto.name,
      price: producto.price,
      image: producto.image 
    }, cantidad);
  };

  return (
    <div className="itemdetail">
      <img src={producto.image} alt={producto.name} className="itemdetail__img" />
      <h2 className="itemdetail__title">{producto.name}</h2>
      <p className="itemdetail__desc">{producto.description || "Sin descripción"}</p>
      <p className="itemdetail__price"><strong>Precio:</strong> ${producto.price}</p>

      {!isInCart(producto.id) ? (
        <div className="itemcount">
          <ItemCount stock={producto.stock ?? 10} initial={1} onAdd={handleAdd} />
        </div>
      ) : (
        <Link to="/cart" className="itemdetail__btn">Terminar mi compra</Link>
      )}
    </div>
  );
}

export default ItemDetail;

