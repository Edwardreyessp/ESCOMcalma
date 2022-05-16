import { Link } from "react-router-dom";
import logo from "../assets/ESCOMcalma_logo.png";

const Navbar = () => {
  return (
    <main id="mainNavbar">
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" />
        <h1>ESCOMcalma</h1>
      </Link>
      <nav className="navbar">
        <Link className="link" to="/">
          Inicio
        </Link>
        <Link className="link" to="/material">
          Material
        </Link>
        <Link className="link" to="/comunidad">
          Comunidad
        </Link>
        <Link className="link" to="/contactanos">
          Contáctanos
        </Link>
        <Link className="link" to="/iniciar-sesion">
          Iniciar Sesión
        </Link>
      </nav>
    </main>
  );
};

export default Navbar;
