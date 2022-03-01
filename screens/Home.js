import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

//constants
import { DELAY_RANDOM_MAX, DELAY_RANDOM_MIN } from '../constants';

//utils
import { getRandomInt, playSound } from '../utils/utils';
import criesPokemon from '../utils/criesPokemon';
import playMusic from '../utils/music';

//components
import Pokemon from '../components/Pokemon';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as pokemonActions from '../store/actions/pokemon';
import * as dresseurActions from '../store/actions/dresseur';

export default function Home(props) {
  const [counterPokemon, setCounterPokemon] = useState(getRandomInt(0, 150));
  const [counterPokeball, setCounterPokeball] = useState(0);
  const [catchRandom, setCatchRandom] = useState();
  const [message, setMessage] = useState('');
  const [pokemonNoVisible, setPokemonNoVisible] = useState(false);
  const [pokeballNoActif, setPokeballNoActif] = useState(false);
  const [fadeIsIn, setFadeIsIn] = useState(true);
  const [fadeIsOut, setFadeIsOut] = useState(false);

  const pokemon = useSelector((state) => state.pokemon.pokemons);
  const pokeball = useSelector((state) => state.dresseur.pokeball);

  const dispatch = useDispatch();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(pokemonActions.getPokemon());

    playMusic();

    fadeIn();
  }, []);

  useEffect(() => {
    let timeOut;

    if (fadeIsIn) {
      criesPokemon(counterPokemon);
      setPokemonNoVisible(false);
      setPokeballNoActif(false);
      pokemon[counterPokemon] &&
        setMessage(`un ${pokemon[counterPokemon].name} vient d'apparaitre !`);

      const delayPop = getRandomInt(DELAY_RANDOM_MIN, DELAY_RANDOM_MAX);
      timeOut = setTimeout(() => {
        fadeOut();
      }, delayPop);
    } else if (fadeIsOut) {
      setPokemonNoVisible(true);
      setPokeballNoActif(true);
      message.includes('a été attrapé') ||
        (message.includes("s'est enfuit")
          ? setTimeout(() => {
              setMessage('');
            }, 2500)
          : setMessage(''));

      const delayPop = getRandomInt(DELAY_RANDOM_MIN, DELAY_RANDOM_MAX);
      timeOut = setTimeout(() => {
        setCounterPokemon(getRandomInt(0, 150));
        fadeIn();
      }, delayPop);
    }

    return () => clearTimeout(timeOut);
  }, [fadeIsIn, fadeIsOut]);

  const pokemonDetails = (id, name, level, sexe, src) => {
    console.log(props);
    props.navigation.navigate('DetailPokemon', {
      id,
      name,
      level,
      sexe,
      src,
    });
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setFadeIsIn(true);
    setFadeIsOut(false);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setFadeIsOut(true);
    setFadeIsIn(false);
  };

  const catchPokemon = () => {
    playSound({ file: require('../assets/mp3/soundPokeball.mp3') });
    setCatchRandom(getRandomInt(1, 2));
    console.log('catchRandom', catchRandom);

    if (catchRandom === 1) {
      playSound(
        { file: require('../assets/mp3/musicCapture.mp3') },
        'musicCapture'
      );

      dispatch(pokemonActions.addPokemon(pokemon[counterPokemon]));
      dispatch(dresseurActions.addMoney());
      setMessage(pokemon[counterPokemon].name + ' a été attrapé !');
      setTimeout(() => {
        setMessage('');
      }, 2500);
    } else {
      setMessage(pokemon[counterPokemon].name + " s'est enfuit...");
      setTimeout(() => {
        setMessage('');
      }, 2500);
    }

    dispatch(dresseurActions.supprStockPokeball());

    fadeOut();
  };

  const showMessage = () => {
    return (
      <View style={styles.message}>
        <Text style={{ fontSize: 20 }}>{message}</Text>
      </View>
    );
  };

  const changePokeball = () => {
    setCounterPokeball(counterPokeball + 1);
  };

  const changePokeballReverse = () => {
    setCounterPokeball(counterPokeball - 1);
  };

  console.log(counterPokeball);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/landscape1.jpg')}
        resizeMode='cover'
        style={styles.background}
      >
        <View style={styles.containerPokemon}>
          {pokemon[0] && (
            <>
              <Animated.View
                style={[
                  {
                    opacity: fadeAnim,
                  },
                ]}
              >
                <Pokemon
                  pokemon={pokemon[counterPokemon]}
                  onClickPokemon={pokemonDetails}
                  pokemonNoVisible={pokemonNoVisible}
                  showMessage={showMessage}
                />
              </Animated.View>

              <TouchableOpacity
                disabled={pokeballNoActif}
                activeOpacity={0.1}
                onPress={
                  pokeball[counterPokeball].stockPokeball > 0
                    ? catchPokemon
                    : null
                }
              >
                <Image
                  source={pokeball[counterPokeball].src}
                  style={styles.pokeball}
                />

                <Badge
                  status='primary'
                  value={pokeball[counterPokeball].stockPokeball}
                  containerStyle={{
                    position: 'absolute',
                    top: 5,
                    left: 60,
                    zIndex: 2,
                  }}
                />
              </TouchableOpacity>
              {counterPokeball < pokeball.length - 1 && (
                <TouchableOpacity
                  style={{ position: 'absolute', right: 70, bottom: 10 }}
                  onPress={changePokeball}
                >
                  <Ionicons
                    name='chevron-forward-outline'
                    size={50}
                    color='red'
                  />
                </TouchableOpacity>
              )}
              {counterPokeball > 0 && (
                <TouchableOpacity
                  style={{ position: 'absolute', left: 70, bottom: 10 }}
                  onPress={changePokeballReverse}
                >
                  <Ionicons name='chevron-back-outline' size={50} color='red' />
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
        {message.length > 0 && showMessage()}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    position: 'relative',
    zIndex: -2,
  },

  containerPokemon: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
    alignItems: 'center',
  },

  pokeball: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    position: 'relative',
    zIndex: 1,
  },

  message: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(243,243,243,0.5)',
    height: 150,
    width: Dimensions.get('window').width,
  },
});
