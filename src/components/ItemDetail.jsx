import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../components/CartContext";

function ItemDetail({ producto }) {
  const { addItem, isInCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
  };

  return (
    <div className="itemdetail">
      <img 
        src={producto.image} 
        alt={producto.name} 
        className="itemdetail__img" 
      />
      <h2 className="itemdetail__title">{producto.name}</h2>
      <p className="itemdetail__desc">{producto.description}</p>
      <p className="itemdetail__price"><strong>Precio:</strong> ${producto.price}</p>

      {!isInCart(producto.id) ? (
        <div className="itemcount">
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        </div>
      ) : (
        <button className="itemdetail__btn">
          Terminar mi compra
        </button>
      )}
    </div>
  );
}

export default ItemDetail;
