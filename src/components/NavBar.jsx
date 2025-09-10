import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  const activeStyle = { fontWeight: "600", color: "#0d6efd" };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
      <h2><NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>Mi Tienda</NavLink></h2>

      <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0 }}>
        <li><NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Inicio</NavLink></li>
        <li><NavLink to="/category/notebooks" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Notebooks</NavLink></li>
        <li><NavLink to="/category/celulares" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Celulares</NavLink></li>
        <li><NavLink to="/category/televisores" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Televisores</NavLink></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;