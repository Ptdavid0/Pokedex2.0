import axios from "axios";
import { Dispatch } from "redux";
import { CHANGE_POKEMON } from "../constants/action-types";
import { Pokemon } from "../models/interface";

export const getPokemon = () => {
  return async (dispatch: Dispatch) => {
    return await axios
      .get("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => {
        dispatch(changePokemon(response.data));
      });
  };
};

export const changePokemon = (pokemon: Pokemon) => {
  return {
    type: CHANGE_POKEMON,
    pokemon: pokemon,
  };
};

// export const get = (payload) => {
//   return { type: ADD_POKEMON, payload };
// };
