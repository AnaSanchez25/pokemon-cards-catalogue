// import backgroundImage from "../assets/booster-art-1.jpg";
import { useEffect, useState } from "react";

function Catalog() {
  interface DataType {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: { front_default: string };
  }

  // const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Array<DataType>>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/25")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error:", error));
    // console.log(data);
  }, []);
  console.log(pokemon);
  return (
    <div className="catalog-container">
      {pokemon.map((data) => (
        <div className="catalog-card">
          <img src={data.sprites.front_default} className="card-img" />
          <div className="card-description">
            <h3>{data.name}</h3>
            <p>
              ID: {data.id}
              <br />
              Height: {data.height}
              <br />
              Weight: {data.weight}
              <br />
              {/* Type: {pokemon.types[].type.name} */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
