import { GET_POKEMONS, ADD_POKEMONS } from '../actions/types';
import _ from 'lodash';

export default function(state = {pokemons:[]}, action) {
	switch(action.type) {
		case ADD_POKEMONS:
		  return { ...state, pokemons: _.uniq([...state.pokemons,action.payload ], 'name') };
	  }

	return state;
}