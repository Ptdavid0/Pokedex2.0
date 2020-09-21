import React, { useEffect, useState } from "react";

import "./styles.css";
import api from "../../services/api";

interface Pokemon {
  name: String;
  id: number;
  height: number;
  weight: number;
  types: [];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}

const Pokedex: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [currentPokemonId, setCurrentPokemonId] = useState(1);

  useEffect(() => {
    api.get(`${currentPokemonId}`).then((response) => {
      console.log(response.data);
      setPokemon(response.data);
      handlePokemonTypes();
    });
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
            <span>
              <strong>
                {pokemon?.stats[0].stat.name?.toUpperCase()}:{" "}
                {pokemon?.stats[0].base_stat}
              </strong>
            </span>
            <span>
              <strong>
                {pokemon?.stats[1].stat.name?.toUpperCase()}:{" "}
                {pokemon?.stats[1].base_stat}
              </strong>
            </span>
            <span>
              <strong>
                {pokemon?.stats[2].stat.name?.toUpperCase()}:{" "}
                {pokemon?.stats[2].base_stat}
              </strong>
            </span>
            <span>
              <strong>
                {pokemon?.stats[3].stat.name?.toUpperCase()}:{" "}
                {pokemon?.stats[3].base_stat}
              </strong>
            </span>
            <span>
              <strong>
                {pokemon?.stats[4].stat.name?.toUpperCase()}:{" "}
                {pokemon?.stats[4].base_stat}
              </strong>
            </span>
            <span>
              <strong>
                {pokemon?.stats[5].stat.name?.toUpperCase()}:{" "}
                {pokemon?.stats[5].base_stat}
              </strong>
            </span>
          </div>
          <div className="pokedex-data-button-div">
            <button
              className="pokedex-data-button"
              onClick={() => setCurrentPokemonId(currentPokemonId - 1)}
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
