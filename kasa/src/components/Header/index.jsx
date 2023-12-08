import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo Kasa" />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "notactive")}
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "notactive")}
              to="/about"
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
