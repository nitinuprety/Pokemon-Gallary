import { combineReducers } from 'redux';
import pokemonData from './pokemonData';
import backpackPoke from './catchPokemon';

const rootReducer = combineReducers({
  pokemonData: pokemonData,
  backpackPoke: backpackPoke
});

export default rootReducer;
