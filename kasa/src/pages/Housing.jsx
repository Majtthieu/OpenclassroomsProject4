import Carrousel from "../components/Carrousel";
import logements from "../datas/logements.json";
import Collapse from "../components/Collapse";
import { useParams, Navigate } from "react-router-dom";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  const getStars = () => {
    const stars = logement.rating;
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starsArray.push(<img key={i} src={starActive} alt="étoile active" />);
      } else {
        starsArray.push(
          <img key={i} src={starInactive} alt="étoile inactive" />
        );
      }
    }
    return starsArray;
  };

  return (
    <main>
      <div className="carrousel">
        <Carrousel
          slides={logement.pictures.map((picture) => ({ url: picture })).flat()}
        />
      </div>
      <div className="housingMain">
        <div className="title">
          <h2>{logement.title}</h2>
          <h3 className="title__location">{logement.location}</h3>
          <ul className="title__tags">
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="housingMain__right">
          <div className="host">
            <p className="host__name">{logement.host.name}</p>
            <img
              className="host__pic"
              src={logement.host.picture}
              alt="portrait de l'hôte"
            />
          </div>
          <div className="stars">{getStars()}</div>
        </div>
      </div>
      <div className="housingCollapse">
        <div className="housingCollapse__description">
          <Collapse label="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>
        <div className="housingCollapse__equipments">
          <Collapse label="Équipements">
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
}

export default Housing;
