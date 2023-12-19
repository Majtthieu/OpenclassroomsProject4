import logements from "../../datas/logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <Link to={"/housing/" + logement.id} key={logement.id}>
          <div className="card-content">
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
