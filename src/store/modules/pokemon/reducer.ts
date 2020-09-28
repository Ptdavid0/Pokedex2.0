import { Reducer } from "redux";
import { Pokemon } from "../../../models/interface";

const INITIAL_STATE = {
  id: 0,
  name: "Pokemon",
};

export const pokemon: Reducer<Pokemon> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
