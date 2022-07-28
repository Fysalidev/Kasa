import '../styles/Error404.css';
import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="backtohome">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
export default Error404;
