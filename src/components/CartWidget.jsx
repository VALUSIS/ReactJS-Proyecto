import carrito from "../assets/carrito.png";

function CartWidget() {
  return (
    <div>
      <img src={carrito} alt="Carrito" style={{ height: "50px", marginRight: "10px"}} />
      <span>0</span>
    </div>
  )
}

export default CartWidget