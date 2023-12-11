import logements from "../../datas/logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="cards-container">
      {logements.map((logement) => (
        <Link to={"/housing/" + logement.id} key={logement.id}>
          <div className="card-content">
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
            {/* <ul>
            {logement.equipments.map((equipment) => (
              <li>- {equipment}</li>
            ))}
          </ul> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
