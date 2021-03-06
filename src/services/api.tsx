import axios from "axios";
import { Pokemon } from "../models/interface";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

let data: Pokemon;

export const getPokemon = (currentPokemonId: number) => {
  api.get(`${currentPokemonId}`).then((response) => {
    data = response.data;
    console.log(currentPokemonId + ` - ${data.name}`);
    console.log(data);
  });
  return data;
};

export default api;
