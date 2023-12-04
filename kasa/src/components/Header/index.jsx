import { Link } from "react-router-dom";
import "./header.sass";
import logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Kasa" />
        </Link>
      </div>
      <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
