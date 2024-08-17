import React from "react";

function PokemoneCard({ pokemonData }) {
  return (
    <li className="pokemon-cards" key={pokemonData.id}>
      <img
        className="card-img"
        src={pokemonData.sprites.other.dream_world.front_default}
        alt={pokemonData.name}
      />
      <h1 className="title">{pokemonData.name}</h1>
      <div className="pokemon-type">
        <p>{pokemonData.types.map((currtype) =>currtype.type.name).join(", ")}</p>
      </div>
      <div className="container">
        <p>Height : <span>{pokemonData.height}</span></p>
        <p>Weight : <span>{pokemonData.weight}</span></p>
        <p>Speed : <span>{pokemonData.stats[0].base_stat}</span></p>
        <p>Experience : <span>{pokemonData.base_experience}</span></p>
        <p>Attack : <span>{pokemonData.stats[1].base_stat}</span></p>
        <p>Abilities : <span>{pokemonData.abilities.map((currAbiblity) => currAbiblity.ability.name).slice(0,1).join(", ")}</span></p>
      </div>
    </li>
  );
}

export default PokemoneCard;
