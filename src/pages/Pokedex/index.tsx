import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";
import { Pokemon } from "../../models/interface";
import { useDispatch, useSelector } from "react-redux";
import { changePokemonOnDisplay } from "../../store/modules/pokemon/actions";
import { IState } from "../../store";

const Pokedex: React.FC = () => {
  const pokemon = useSelector<IState, Pokemon>((state) => state.pokemon);
  const dispatch = useDispatch();
  const [currentPokemonId, setCurrentPokemonId] = useState(1);

  useEffect(() => {
    handlePokemonOnDisplay(currentPokemonId);
  }, [currentPokemonId]);

  const handlePokemonOnDisplay = useCallback(
    (id: number) => {
      console.log("Hello");
      dispatch(changePokemonOnDisplay(currentPokemonId));
    },
    [currentPokemonId, dispatch]
  );

  const handlePokemonTypes = () => {
    const types =
      pokemon &&
      pokemon.types &&
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
              <p>
                <strong>ABILITY: </strong>
                {pokemon &&
                  pokemon.abilities &&
                  pokemon?.abilities[0].ability.name}
              </p>
            </span>
            <span>
              <p>
                <strong>HEIGHT: </strong>
                {pokemon?.height}
              </p>
            </span>
            <span>
              <p>
                <strong>WEIGHT: </strong>
                {pokemon?.weight}
              </p>
            </span>
            {pokemon &&
              pokemon.stats &&
              pokemon?.stats.map((stat, key) => {
                return (
                  <span key={key}>
                    <p>
                      <strong>{stat.stat.name.toUpperCase()}: </strong>
                      {stat.base_stat}
                    </p>
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
              onClick={() => {
                setCurrentPokemonId(currentPokemonId + 1);
              }}
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
