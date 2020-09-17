import axios from 'axios';
import { create } from 'domain';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export default api;
