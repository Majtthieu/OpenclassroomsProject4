import { Link } from "react-router-dom";
import "./footer.sass";
import logo from "../../assets/LOGO.png";

function Footer() {
  return (
    <div className="footercontent">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" />
      </Link>
      <p className="footercontent__p">© 2023 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
