import logements from "../../datas/logements.json";

const Card = () => {
  return (
    <div className="cards-container">
      {logements.map((logement, index) => (
        <div className="card-content" key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <p>{logement.title}</p>
          {/* <ul>
            {logement.equipments.map((equipment) => (
              <li>- {equipment}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default Card;
