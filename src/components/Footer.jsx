import "../styles/Footer.css";
import logo_blanc from "../assets/logo_blanc.png";

function Footer() {
  return (
    <footer>
      <img src={logo_blanc} alt="logo Kasa blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
