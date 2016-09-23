import { createStore, combineReducers } from 'redux';
import game from './game/reducers.js';
import grid from './grid/reducers.js';


const reducers = combineReducers({
  game,
  grid,
});

const store = createStore(reducers);

export default store;
