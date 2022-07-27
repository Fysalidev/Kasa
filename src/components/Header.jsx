import "../styles/Header.css";
import logo_rouge from "../assets/logo_rouge.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logo_rouge} alt="Logo Kasa rouge" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
