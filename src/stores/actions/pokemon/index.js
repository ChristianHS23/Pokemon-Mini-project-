/* eslint-disable comma-dangle */
// pokemon Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */

// import { delay } from 'helpers';
// import { setValueCurrentPage, setValueTotalPage } from '../progressBar';
// import { responeCode } from 'utils/helpers/responeCode';
import { getListPokemon, getPokemonDetail } from 'utils/api';
import Axios from 'axios';

export const SET_LOADING = 'pokemon/SET_LOADING';
export const CLEAR_ERROR = 'pokemon/CLEAR_ERROR';
export const SET_ERROR = 'pokemon/SET_ERROR';
export const INIT_DATA = 'pokemon/INIT_DATA';
export const SET_POKEMON_DATA_MASTER = 'pokemon/SET_POKEMON_DATA_MASTER';
export const SET_POKEMON_DATA_SHOW = 'pokemon/SET_POKEMON_DATA_SHOW';

export const setPokemonDataShow = (payload) => ({
  type: SET_POKEMON_DATA_SHOW,
  payload,
});
export const setPokemonDataMaster = (payload) => ({
  type: SET_POKEMON_DATA_MASTER,
  payload,
});

export const getPokemonDetailData = async (data, dispatch) => {
  const listPokemon = [];
  const listPokemonService = [];
  await data.results.map(async (result, index) => {
    listPokemonService.push(getPokemonDetail(result.name));
  });
  await Promise.all(listPokemonService).then((data) => {
    // console.warn(data);
    data.map((item) => listPokemon.push(item.data));
  });
  console.warn(listPokemon);
  dispatch(setPokemonDataShow(listPokemon));
};

export const getPokemonDetailDataNext = async (
  data,
  dispatch,
  currentData,
  listener
) => {
  const listPokemonService = [];
  await data.results.map(async (result, index) => {
    listPokemonService.push(getPokemonDetail(result.name));
  });
  await Promise.all(listPokemonService).then((data) => {
    // console.warn(data);
    data.map((item) => currentData.push(item.data));
  });
  console.warn(currentData);
  dispatch(setPokemonDataShow(currentData));
  listener();
};

export const getListPokemonData = () => async (dispatch) => {
  await getListPokemon(0, 20).then(async ({ data }) => {
    dispatch(setPokemonDataMaster(data));
    console.warn(data);
    getPokemonDetailData(data, dispatch);
  });
};

export const getListNextPokemon = (listener) => async (dispatch, getState) => {
  const pokemonMaster = getState().pokemon.pokemonMaster;
  const pokemonShow = getState().pokemon.pokemonShow;
  console.warn(pokemonMaster, pokemonShow);
  Axios.get(pokemonMaster.next).then(({ data }) => {
    console.warn(data, 'ini next');
    dispatch(setPokemonDataMaster(data));
    getPokemonDetailDataNext(data, dispatch, pokemonShow, listener);
  });
};
