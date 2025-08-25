import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
      <h2>Mi Tienda</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar