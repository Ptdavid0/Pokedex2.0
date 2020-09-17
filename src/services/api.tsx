import axios from 'axios';
import { create } from 'domain';

//eslint-disable-next-line
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export default api;
