import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import logo_rouge from "../assets/logo_rouge.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo_rouge} alt="Logo Kasa rouge" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
