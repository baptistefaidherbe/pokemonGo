import api from '../../utils/api';
import { getRandomInt } from '../../utils/utils';

export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_TYPE = 'GET_POKEMON_TYPE';
export const ADD_POKEMON = 'ADD_POKEMON';

export const getPokemon = () => {
  return async (dispatch) => {
    try {
      const resp = await api.get('/pokemon/?limit=151');
      const data = await resp.data.results;

      const arrayPokemon = data.map((pokemon, index) => {
        index += 1;
        let sexeRandom = getRandomInt(0, 1);
        pokemon.id = index;
        pokemon.level = getRandomInt(40, 80);
        pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;
        pokemon.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
        pokemon.sexe = sexeRandom === 0 ? 'male' : 'femelle';

        return pokemon;
      });

      dispatch({ type: GET_POKEMON, pokemon: arrayPokemon });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemonType = (id) => {
  return async (dispatch) => {
    try {
      const resp = await api.get(`/pokemon/${id}`);
      const data = await resp.data.types;

      dispatch({ type: GET_POKEMON_TYPE, pokemonType: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addPokemon = (pokemon) => ({
  type: ADD_POKEMON,
  pokemon,
});
