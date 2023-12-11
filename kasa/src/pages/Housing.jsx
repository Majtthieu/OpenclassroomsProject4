import Carrousel from "../components/Carrousel";
import logements from "../datas/logements.json";

function Housing() {
  const slides = [
    { url: "http://localhost:3000/pic1.webp", title: "Fox 1", alt: "Fox 1" },
    { url: "http://localhost:3000/pic2.webp", title: "Fox 2", alt: "Fox 2" },
    { url: "http://localhost:3000/pic3.webp", title: "Fox 3", alt: "Fox 3" },
    { url: "http://localhost:3000/pic4.webp", title: "Fox 4", alt: "Fox 4" },
    { url: "http://localhost:3000/pic5.webp", title: "Fox 5", alt: "Fox 5" },
  ];
  return (
    <main>
      <div className="carrousel">
        <Carrousel slides={slides} />
      </div>
    </main>
  );
}

export default Housing;
