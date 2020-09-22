import React, { useEffect, useState } from "react";

import "./styles.css";
import { Pokemon } from "../../models/interface";
import { getPokemon } from "../../services/api";

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [currentPokemonId, setCurrentPokemonId] = useState(1);

  useEffect(() => {
    setPokemon(getPokemon(currentPokemonId));
    handlePokemonTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPokemon(getPokemon(currentPokemonId));
    handlePokemonTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemonId]);

  const handlePokemonTypes = () => {
    const types =
      pokemon &&
      pokemon.types.map((type: { type: { name: string } }) => {
        return type.type.name;
      });
    return types && types[0];
  };

  return (
    <div className="pokedex-container">
      <div className="pokedex-info-container">
        <div className="pokedex-info-title">#{pokemon?.id}</div>

        <div className="pokedex-info-data">
          <div className={`pokedex-data-title ${handlePokemonTypes()}-color`}>
            Atributes facts.
          </div>
          <div className="pokedex-data-data">
            <span>
              <strong>ABILITY: {pokemon?.abilities[0].ability.name}</strong>
            </span>
            <span>
              <strong>HEIGHT: {pokemon?.height}</strong>
            </span>
            <span>
              <strong>WEIGHT: {pokemon?.weight}</strong>
            </span>
            {pokemon?.stats.map((stat, key) => {
              return (
                <span key={key}>
                  <strong>
                    {stat.stat.name.toUpperCase()}: {stat.base_stat}
                  </strong>
                </span>
              );
            })}
          </div>
          <div className="pokedex-data-button-div">
            <button
              className="pokedex-data-button"
              onClick={() =>
                currentPokemonId > 1
                  ? setCurrentPokemonId(currentPokemonId - 1)
                  : ""
              }
            >
              <strong>{`<`}</strong>
            </button>
            <button
              className="pokedex-data-button"
              onClick={() => setCurrentPokemonId(currentPokemonId + 1)}
            >
              <strong>{`>`}</strong>
            </button>
          </div>
        </div>
      </div>

      <div className={`pokedex-image-container ${handlePokemonTypes()}`}>
        <div className="pokedex-image-div">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${
              pokemon && pokemon.id
            }.png`}
            className="pokedex-image"
            alt=""
          />
          <p className="pokemon-image-name">{pokemon?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
