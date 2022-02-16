import { Audio } from 'expo-av';

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function playSound(source) {
  const audio = source.file;
  // console.log(audio);
  const { sound } = await Audio.Sound.createAsync(source.file);
  if (audio === 11) {
    sound.setIsLoopingAsync(true);
  }
  await sound.replayAsync();
}
