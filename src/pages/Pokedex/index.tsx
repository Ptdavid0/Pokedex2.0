import React, { useEffect, useState } from "react";

import "./styles.css";
import api from "../../services/api";

interface Pokemon {
  name: String;
  id: number;
  types: [];
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
        <div className="pokedex-info-title">pokemon.</div>

        <div className="pokedex-info-data">
          <div className={`pokedex-data-title ${handlePokemonTypes()}-color`}>
            Atributes facts.
          </div>
          <div className="pokedex-data-data">
            <span>
              <strong>HP:</strong>
            </span>
            <span>
              <strong>ATTACK:</strong>
            </span>
            <span>
              <strong>DEFENSE:</strong>
            </span>
            <span>
              <strong>SP.ATTACK:</strong>
            </span>
            <span>
              <strong>SP.DEFENSE:</strong>
            </span>
            <span>
              <strong>SPEED:</strong>
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

      <div className="pokedex-image-container">
        <div className="pokedex-image-div">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${
              pokemon && pokemon.id
            }.png`}
            className="pokedex-image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
