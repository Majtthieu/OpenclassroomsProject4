import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import texts from "../datas/bigtexts.json";

function About() {
  return (
    <main>
      <Banner alt="Bannière Kasa" imageUrl="./aboutbanner.jpg" />
      <div className="collapse-container">
        <Collapse label="Fiabilité">
          <p>{texts.find((text) => text.id === "1").content}</p>
        </Collapse>
        <Collapse label="Respect">
          <p>{texts.find((text) => text.id === "2").content}</p>
        </Collapse>
        <Collapse label="Service">
          <p>{texts.find((text) => text.id === "3").content}</p>
        </Collapse>
        <Collapse label="Sécurité">
          <p>{texts.find((text) => text.id === "4").content}</p>
        </Collapse>
      </div>
    </main>
  );
}

export default About;
