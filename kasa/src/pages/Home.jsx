import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <main>
      <Banner
        title="Chez vous, partout et ailleurs"
        alt="Bannière Kasa"
        imageUrl="./homebanner.jpg"
      />
      <Card />
    </main>
  );
}

export default Home;
