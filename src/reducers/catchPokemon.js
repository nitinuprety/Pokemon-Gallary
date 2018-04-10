import { GET_POKEMONS, CATCH_POKEMONS } from '../actions/types';
import _ from 'lodash';

export default function(state = {pokemons:[]}, action) {
	switch(action.type) {
		case CATCH_POKEMONS:
		  return { ...state, backpackPoke: _.uniq([...state.pokemons,action.payload ], 'name') };
	  }

	return state;
}