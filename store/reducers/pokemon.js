import { GET_POKEMON, GET_POKEMON_TYPE } from '../actions/pokemon';

const initialState = {
  pokemons: [],
  pokemonType : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: [...action.pokemon],
      };
    case GET_POKEMON_TYPE:
      return {
        ...state,
        pokemonType: [...action.pokemonType],
      };

    default:
      return state;
  }
};
