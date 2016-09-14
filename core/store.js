import { createStore, combineReducers } from 'redux';
import game from './game/reducers.js';


const reducers = combineReducers({
  game,
});

const store = createStore(reducers);

export default store;
