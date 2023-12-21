import Carrousel from "../components/Carrousel";
import logements from "../datas/logements.json";
import Collapse from "../components/Collapse";
import { useParams, Navigate } from "react-router-dom";
import Stars from "../components/Stars";

function Housing() {
  // l'id que l'on récupère ici est celui qui est passé dans l'url depuis les routes
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Si aucune correpondance n'est trouvée, on redirige vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <main>
      <div className="carrousel">
        <Carrousel
          slides={logement.pictures.map((picture) => ({ url: picture }))}
        />
      </div>
      <HousingDatas
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      <div className="housingCollapse">
        <HousingDescription description={logement.description} />
        <HousingEquipments equipments={logement.equipments} />
      </div>
    </main>
  );
}

const HousingDatas = ({ title, location, tags, host, rating }) => {
  return (
    <div className="housingMain">
      <div className="title">
        <h2>{title}</h2>
        <h3 className="title__location">{location}</h3>
        <ul className="title__tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="housingMain__right">
        <div className="host">
          <p className="host__name">{host.name}</p>
          <img
            className="host__pic"
            src={host.picture}
            alt="portrait de l'hôte"
          />
        </div>
        <Stars rating={rating} />
      </div>
    </div>
  );
};

const HousingDescription = ({ description }) => {
  return (
    <div className="housingCollapse__description">
      <Collapse label="Description">
        <p>{description}</p>
      </Collapse>
    </div>
  );
};

const HousingEquipments = ({ equipments }) => {
  return (
    <div className="housingCollapse__equipments">
      <Collapse label="Équipements">
        <ul>
          {equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default Housing;
