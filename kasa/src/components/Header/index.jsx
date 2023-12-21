import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.svg";

// Application d'un style pour indiquer la page active
const ActiveNavLink = ({ to, label }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active" : "notactive")}
      to={to}
    >
      {label}
    </NavLink>
  );
};

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
            <ActiveNavLink to="/" label="Accueil" />
          </li>
          <li>
            <ActiveNavLink to="/about" label="À propos" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
