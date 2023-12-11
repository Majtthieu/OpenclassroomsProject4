import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <div className="container-error">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="back" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
};

export default Error;
