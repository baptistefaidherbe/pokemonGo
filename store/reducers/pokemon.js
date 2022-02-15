import { GET_POKEMON, GET_POKEMON_TYPE, ADD_POKEMON } from '../actions/pokemon';

const initialState = {
  pokemons: [],
  pokemonType: [],
  pokemonTeam: [],
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
    case ADD_POKEMON:
      return {
        ...state,
        pokemonTeam: [...state.pokemonTeam, action.pokemon],
      };

    default:
      return state;
  }
};
