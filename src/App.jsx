import React, { useEffect, useState } from "react";
import PokemoneCard from "./Components/PokemoneCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fatchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailsPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailsResponse = await Promise.all(detailsPokemonData);
      console.log(detailsResponse);
      setPokemon(detailsResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fatchPokemon();
  }, []);

  // Search Function 

  const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading.....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="header">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
      </section>
      <div className="input-field">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((currPokemon) => {
            return (
              <PokemoneCard key={currPokemon.id} pokemonData={currPokemon} />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
