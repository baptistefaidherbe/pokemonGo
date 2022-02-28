import {
  GET_POKEMON,
  GET_POKEMON_TYPE,
  ADD_POKEMON,
  REMOVE_POKEMON,
} from '../actions/pokemon';

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
    case REMOVE_POKEMON:
      const filterPokemonTeam = state.pokemonTeam.filter(
        (pokemon, index) => index !== action.pokemon
      );
      return {
        ...state,
        pokemonTeam: filterPokemonTeam,
      };

    default:
      return state;
  }
};
