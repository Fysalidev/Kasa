import "../styles/Error404.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Error404() {
  useEffect(() => {
    document.title = `Kasa - Erreur 404`;
  });

  return (
    <main>
      <section className="error404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="backtohome">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </main>
  );
}
export default Error404;
