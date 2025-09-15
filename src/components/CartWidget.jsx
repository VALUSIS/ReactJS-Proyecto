import carrito from "../assets/carrito.png";

function CartWidget({ cartCount }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={carrito} alt="Carrito" style={{ height: "50px", marginRight: "10px" }} />
      <span>{cartCount}</span>
    </div>
  );
}

export default CartWidget;