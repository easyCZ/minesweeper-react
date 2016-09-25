import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import game from './game/reducers.js';
import grid from './grid/reducers.js';


const logger = createLogger();
const reducers = combineReducers({
  game,
  grid,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

export default store;
