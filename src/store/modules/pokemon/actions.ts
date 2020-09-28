import { Pokemon } from "../../../models/interface";

export function changePokemonOnDisplay(currentPokemonId: number) {
  return {
    type: "CHANGE_POKEMON",
    payload: currentPokemonId,
  };
}

export function addPokemon(pokemon: Pokemon) {
  return {
    type: "ADD_POKEMON",
    payload: pokemon,
  };
}
