import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, deleteItem, clear, calcTotal } = useContext(CartContext);

  if (cartList.length === 0) {
    return (
      <div className="cart-empty">
        <p>No hay productos en el carrito.</p>
        <Link to="/">Volver a comprar</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Mi Carrito</h2>

      {cartList.map((prod) => (
        <div key={prod.id} className="cart-item">
          <h3>{prod.name}</h3>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Subtotal: ${prod.price * prod.quantity}</p>
          <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
        </div>
      ))}

      <div className="cart-total">Total: ${calcTotal()}</div>
      <button onClick={clear}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
