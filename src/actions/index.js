import axios from 'axios';
import { browserHistory } from 'react-router';
import { GET_POKEMONS, ADD_POKEMONS, CATCH_POKEMONS} from './types';
import _ from 'lodash';


/*----------------------------------------
        	POKEMONE DATA
------------------------------------------*/
export function fetchPokemonData() {
  return function(dispatch) {
     axios.get('https://pokeapi.co/api/v2/pokemon/?limit=52')
       .then(response => {
       	// console.log('check data...', response.data);
        
       var count =0;
       get_pokemon_details(response.data.results[count].url);
       
       function get_pokemon_details(url){
       	  axios.get(url)
      	 .then(res => {
      	 	// console.log('res data..', res.data);
      	 	dispatch({type: ADD_POKEMONS , payload: res.data});
      	 	count++;
      	 	if(count<response.data.results.length){
      	 		get_pokemon_details(response.data.results[count].url);
      	 	}
         	// console.log('map data name...', camp.name);
         })
       }
       })
       // .catch(error => console.log(error));
  }
}


/*----------------------------------------
          POKEMONE DATA
------------------------------------------*/
export function catchPokemon(catchpoke) {
  console.log('action backpack', catchpoke);
  return {type: CATCH_POKEMONS , payload: catchpoke}
}