/* eslint-disable comma-dangle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import TestReducer from './TestReducer';

import pokemon from './pokemon';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    TestReducer,
    pokemon,
  });
