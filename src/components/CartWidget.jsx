import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import carrito from "../assets/carrito.png";

function CartWidget() {
  const { calcItemsQty } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <img src={carrito} alt="Carrito" className="cart-widget__icon" />
      <span className="cart-widget__count">{calcItemsQty()}</span>
    </Link>
  );
}

export default CartWidget;
