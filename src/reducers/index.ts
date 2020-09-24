import { CHANGE_POKEMON } from "../constants/action-types";
import { PokemonAction, InitialPokemonState } from "../models/interface";

const initialState: InitialPokemonState = {
  pokemon: [],
};

export const rootReducers = (state = initialState, action: PokemonAction) => {
  if (action.type === CHANGE_POKEMON) {
    return {
      ...state,
      pokemon: action.pokemon,
    };
  } else {
    return {
      ...state,
    };
  }
};
