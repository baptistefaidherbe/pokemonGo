import { Audio } from 'expo-av';

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function playSound(source, name) {
  try {
    const { sound } = await Audio.Sound.createAsync(source.file);
    sound.setVolumeAsync(0.1);
    const test = await sound.playAsync();

    if (name === 'musicCapture') {
      sound.setVolumeAsync(0.6);
    }

    if (name === 'music1' || name === 'music2' || name === 'music3') {
      sound.setIsLoopingAsync(true);
      return;
    }

    setTimeout(() => {
      sound.unloadAsync();
    }, test.durationMillis + 1000);
  } catch (error) {
    console.log(error);
  }
}
