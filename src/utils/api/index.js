/* eslint-disable no-unused-vars */
import axios from 'axios';

const apiUrl = 'https://pokeapi.co/api/v2';

export const getListPokemon = (offset, limit) =>
  axios.get(`${apiUrl}/pokemon?offset=${offset}&limit=${limit}`);

export const getPokemonDetail = (pokemonName) =>
  axios.post(`${apiUrl}pokemon/${pokemonName}`, {});
