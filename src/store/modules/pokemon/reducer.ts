import { Reducer } from "redux";
import { Pokemon } from "../../../models/interface";

const INITIAL_STATE: Pokemon = {
  id: 0,
  name: "Pokemon",
};

export const pokemon: Reducer<Pokemon> = () => {
  return INITIAL_STATE;
};
