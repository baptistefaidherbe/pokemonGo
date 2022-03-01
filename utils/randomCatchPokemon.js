import { getRandomInt } from '../utils/utils';

export default function randomCatchPokemon(
  name,
  counterPokemon,
  setCatchRandom
) {
  switch (name) {
    case 'pokeball':
      console.log('icici', counterPokemon);
      if (
        counterPokemon === 2 ||
        counterPokemon === 5 ||
        counterPokemon === 8 ||
        counterPokemon === 143 ||
        counterPokemon === 144 ||
        counterPokemon === 145 ||
        counterPokemon === 148 ||
        counterPokemon === 149 ||
        counterPokemon === 150
      ) {
        setCatchRandom(getRandomInt(1, 50));
      } else if (
        counterPokemon === 141 ||
        counterPokemon === 4 ||
        counterPokemon === 1 ||
        counterPokemon === 7 ||
        counterPokemon === 11 ||
        counterPokemon === 17 ||
        counterPokemon === 25 ||
        counterPokemon === 33 ||
        counterPokemon === 35 ||
        counterPokemon === 37 ||
        counterPokemon === 54 ||
        counterPokemon === 44 ||
        counterPokemon === 63 ||
        counterPokemon === 67 ||
        counterPokemon === 75 ||
        counterPokemon === 77 ||
        counterPokemon === 79 ||
        counterPokemon === 84 ||
        counterPokemon === 94 ||
        counterPokemon === 96 ||
        counterPokemon === 105 ||
        counterPokemon === 106 ||
        counterPokemon === 111 ||
        counterPokemon === 114 ||
        counterPokemon === 121 ||
        counterPokemon === 122 ||
        counterPokemon === 123 ||
        counterPokemon === 124 ||
        counterPokemon === 125 ||
        counterPokemon === 129 ||
        counterPokemon === 130 ||
        counterPokemon === 134 ||
        counterPokemon === 135 ||
        counterPokemon === 133 ||
        counterPokemon === 142 ||
        counterPokemon === 147 ||
        counterPokemon === 64 ||
        counterPokemon === 93
      ) {
        setCatchRandom(getRandomInt(1, 15));
      } else {
        setCatchRandom(getRandomInt(1, 2));
      }

      break;
    case 'superball':
      if (
        counterPokemon === 2 ||
        counterPokemon === 5 ||
        counterPokemon === 8 ||
        counterPokemon === 143 ||
        counterPokemon === 144 ||
        counterPokemon === 145 ||
        counterPokemon === 148 ||
        counterPokemon === 149 ||
        counterPokemon === 150
      ) {
        setCatchRandom(getRandomInt(1, 40));
      } else if (
        counterPokemon === 141 ||
        counterPokemon === 4 ||
        counterPokemon === 1 ||
        counterPokemon === 7 ||
        counterPokemon === 11 ||
        counterPokemon === 17 ||
        counterPokemon === 25 ||
        counterPokemon === 33 ||
        counterPokemon === 35 ||
        counterPokemon === 37 ||
        counterPokemon === 54 ||
        counterPokemon === 44 ||
        counterPokemon === 63 ||
        counterPokemon === 67 ||
        counterPokemon === 75 ||
        counterPokemon === 77 ||
        counterPokemon === 79 ||
        counterPokemon === 84 ||
        counterPokemon === 94 ||
        counterPokemon === 96 ||
        counterPokemon === 105 ||
        counterPokemon === 106 ||
        counterPokemon === 111 ||
        counterPokemon === 114 ||
        counterPokemon === 121 ||
        counterPokemon === 122 ||
        counterPokemon === 123 ||
        counterPokemon === 124 ||
        counterPokemon === 125 ||
        counterPokemon === 129 ||
        counterPokemon === 130 ||
        counterPokemon === 134 ||
        counterPokemon === 135 ||
        counterPokemon === 133 ||
        counterPokemon === 142 ||
        counterPokemon === 147 ||
        counterPokemon === 64 ||
        counterPokemon === 93
      ) {
        setCatchRandom(getRandomInt(1, 5));
      } else {
        setCatchRandom(getRandomInt(1, 2));
      }

      break;

    case 'hyperball':
      if (
        counterPokemon === 2 ||
        counterPokemon === 5 ||
        counterPokemon === 8 ||
        counterPokemon === 143 ||
        counterPokemon === 144 ||
        counterPokemon === 145 ||
        counterPokemon === 148 ||
        counterPokemon === 149 ||
        counterPokemon === 150
      ) {
        setCatchRandom(getRandomInt(1, 8));
      } else if (
        counterPokemon === 141 ||
        counterPokemon === 4 ||
        counterPokemon === 1 ||
        counterPokemon === 7 ||
        counterPokemon === 11 ||
        counterPokemon === 17 ||
        counterPokemon === 25 ||
        counterPokemon === 33 ||
        counterPokemon === 35 ||
        counterPokemon === 37 ||
        counterPokemon === 54 ||
        counterPokemon === 44 ||
        counterPokemon === 63 ||
        counterPokemon === 67 ||
        counterPokemon === 75 ||
        counterPokemon === 77 ||
        counterPokemon === 79 ||
        counterPokemon === 84 ||
        counterPokemon === 94 ||
        counterPokemon === 96 ||
        counterPokemon === 105 ||
        counterPokemon === 106 ||
        counterPokemon === 111 ||
        counterPokemon === 114 ||
        counterPokemon === 121 ||
        counterPokemon === 122 ||
        counterPokemon === 123 ||
        counterPokemon === 124 ||
        counterPokemon === 125 ||
        counterPokemon === 129 ||
        counterPokemon === 130 ||
        counterPokemon === 134 ||
        counterPokemon === 135 ||
        counterPokemon === 133 ||
        counterPokemon === 142 ||
        counterPokemon === 147 ||
        counterPokemon === 64 ||
        counterPokemon === 93
      ) {
        setCatchRandom(getRandomInt(1, 2));
      } else {
        setCatchRandom(getRandomInt(1, 2));
      }

      break;

    default:
      break;
  }
}
