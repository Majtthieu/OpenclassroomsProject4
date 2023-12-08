import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <main>
      <Banner alt="Bannière Kasa" imageUrl="./aboutbanner.jpg" />
      <div className="collapse-container">
        <Collapse label="Fiabilité">
          <p>
            Tous les logements disponibles à la réservation ont été visités et
            sélectionnés par nos soins. Nous vérifions notamment la qualité des
            équipements et le sérieux de nos hôtes.
          </p>
        </Collapse>
        <Collapse label="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse label="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse label="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </main>
  );
}

export default About;
