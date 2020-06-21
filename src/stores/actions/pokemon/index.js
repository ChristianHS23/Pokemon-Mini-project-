/* eslint-disable comma-dangle */
// pokemon Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */

// import { delay } from 'helpers';
// import { setValueCurrentPage, setValueTotalPage } from '../progressBar';
// import { responeCode } from 'utils/helpers/responeCode';
import { getListPokemon } from 'utils/api';

export const SET_LOADING = 'pokemon/SET_LOADING';
export const CLEAR_ERROR = 'pokemon/CLEAR_ERROR';
export const SET_ERROR = 'pokemon/SET_ERROR';
export const INIT_DATA = 'pokemon/INIT_DATA';
export const SET_DOUBLE_SUBMIT = 'pokemon/SET_DOUBLE_SUBMIT';

export const setDoubleSubmit = (payload) => ({
  type: SET_DOUBLE_SUBMIT,
  payload,
});
