import { Link } from "react-router-dom";
import logo from "../../assets/LOGO_W.svg";

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <p>© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
