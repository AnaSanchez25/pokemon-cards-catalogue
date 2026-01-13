import backgroundImage from "../assets/booster-art-1.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="home-bg">
        <div className="white-gradient"></div>
        <img src={backgroundImage} className="home-bg-image" />
      </div>
      <div className="home-title">
        <h1 style={{ fontSize: "48px" }}>
          The original <br />
          150
        </h1>
        <p>Explore the world where the journey began.</p>
        <button className="pokedex-btn">Explore Catalog!</button>
      </div>
    </div>
  );
}

export default Home;
