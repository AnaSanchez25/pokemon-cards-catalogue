import sadPokemon from "../assets/sad-pokemon.png";
import { useEffect, useState } from "react";

function Catalog() {
  interface DataType {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: { front_default: string };
    types: {
      [key: number]: { type: { name: string } };
    };
  }

  const [pokemon, setPokemon] = useState<DataType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState("fav-poke");

  async function apiCall(id: number) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((apiData) => {
        setPokemon(apiData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Error:", error);
      });
  }

  function randomNum() {
    const randomNum = Math.floor(Math.random() * 150);
    return randomNum;
  }

  function refreshPage() {
    window.location.reload();
  }

  function makeFav() {
    if (fav !== "fav-poke-active") {
      setFav("fav-poke-active");
    } else {
      setFav("fav-poke");
    }
  }

  useEffect(() => {
    const pokemonId = randomNum();
    apiCall(pokemonId);
  }, []);

  console.log(pokemon);

  return (
    <div className="catalog-container">
      {loading && (
        <div className="catalog-loading">
          <p>Loading data...</p>
        </div>
      )}
      {error && (
        <div className="catalog-error">
          <img src={sadPokemon} />
          <p>Something went wrong</p>
          <button className="reload-button" onClick={refreshPage}>
            Reload
          </button>
        </div>
      )}
      {pokemon && (
        <div className="catalog-cards-container">
          <div className="catalog-card">
            <div className="card-header">
              <span
                className={`material-symbols-rounded ${fav}`}
                onClick={makeFav}
              >
                kid_star
              </span>
              <h3 className="all-caps">{pokemon.name}</h3>
            </div>

            <img src={pokemon.sprites.front_default} className="card-img" />
            <div className="card-description">
              <p>
                <b>ID:</b> {pokemon?.id}
                <br />
                <b>Height:</b> {pokemon.height}
                <br />
                <b>Weight: </b> {pokemon.weight}
                <br />
                <b>Type:</b> {pokemon.types[0].type.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
