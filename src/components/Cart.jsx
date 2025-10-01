import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

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

    {cartList.map((item) => (
      <div key={item.id}>
        <p>{item.name} - ${item.price} x {item.quantity}</p>
      </div>
    ))}

    <div className="cart-total">Total: ${calcTotal()}</div>
    <button onClick={clear}>Vaciar carrito</button>

    <hr />
    <CheckoutForm />
  </div>
);

};

export default Cart;
