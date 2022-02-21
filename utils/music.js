import { getRandomInt } from './utils';
import { playSound } from './utils';

export default function playMusic() {
  const randomMusic = getRandomInt(1, 3);
  switch (randomMusic) {
    case 1:
      playSound(
        {
          file: require('../assets/mp3/music1.mp3'),
        },
        'music1'
      );
      break;
    case 2:
      playSound(
        {
          file: require('../assets/mp3/music2.mp3'),
        },
        'music2'
      );
      break;
    case 3:
      playSound(
        {
          file: require('../assets/mp3/music3.mp3'),
        },
        'music3'
      );
      break;

    default:
      break;
  }
}
