import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import { CartContext } from "../components/CartContext";

function NavBar() {
  const { calcItemsQty, cartList } = useContext(CartContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </NavLink>

      {/* Menú */}
      <ul className="navbar__menu">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Notebooks" className={({ isActive }) => isActive ? "active" : ""}>
            Notebooks
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Celulares" className={({ isActive }) => isActive ? "active" : ""}>
            Celulares
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Televisores" className={({ isActive }) => isActive ? "active" : ""}>
            Televisores
          </NavLink>
        </li>
      </ul>
      <div className="navbar__cart">
  <CartWidget />
</div>
    </nav>
  );
}

export default NavBar;
