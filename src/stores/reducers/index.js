import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import TestReducer from './TestReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    TestReducer
  });
