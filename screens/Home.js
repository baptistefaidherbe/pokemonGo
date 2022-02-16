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

//constants
import { DELAY_RANDOM_MAX, DELAY_RANDOM_MIN } from '../constants';

//utils
import { getRandomInt, playSound } from '../utils/utils';
import criesPokemon from '../utils/criesPokemon';

//components
import Pokemon from '../components/Pokemon';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as pokemonActions from '../store/actions/pokemon';

export default function App(props) {
  const [counterPokemon, setCounterPokemon] = useState(getRandomInt(0, 150));
  const [pokemonNoVisible, setPokemonNoVisible] = useState(false);
  const [pokeballNoActif, setPokeballNoActif] = useState(false);
  const [fadeIsIn, setFadeIsIn] = useState(true);
  const [fadeIsOut, setFadeIsOut] = useState(false);

  const pokemon = useSelector((state) => state.pokemon.pokemons);
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(pokemonActions.getPokemon());

    const randomMusic = getRandomInt(1, 3);
    switch (randomMusic) {
      case 1:
        playSound({
          file: require('../assets/mp3/music1.mp3'),
        });
        break;
      case 2:
        playSound({
          file: require('../assets/mp3/music2.mp3'),
        });
        break;
      case 3:
        playSound({
          file: require('../assets/mp3/music3.mp3'),
        });
        break;

      default:
        break;
    }

    fadeIn();
  }, []);

  useEffect(() => {
    let timeOut;
    if (fadeIsIn) {
      criesPokemon(counterPokemon);
      setPokemonNoVisible(false);
      setPokeballNoActif(false);

      const delayPop = getRandomInt(DELAY_RANDOM_MIN, DELAY_RANDOM_MAX);
      timeOut = setTimeout(() => {
        fadeOut();
      }, delayPop);
    } else if (fadeIsOut) {
      setPokemonNoVisible(true);
      setPokeballNoActif(true);

      const delayPop = getRandomInt(DELAY_RANDOM_MIN, DELAY_RANDOM_MAX);
      timeOut = setTimeout(() => {
        setCounterPokemon(getRandomInt(0, 150));
        fadeIn();
      }, delayPop);
    }

    return () => clearTimeout(timeOut);
  }, [fadeIsIn, fadeIsOut]);

  const pokemonDetails = (id, name, level, sexe, src) => {
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
    dispatch(pokemonActions.addPokemon(pokemon[counterPokemon]));

    fadeOut();
  };

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
                />
              </Animated.View>
              <TouchableOpacity
                disabled={pokeballNoActif}
                activeOpacity={0.1}
                onPress={catchPokemon}
              >
                <Image
                  source={require('../assets/img/pokeball.png')}
                  style={styles.pokeball}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  pokeball: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    position: 'relative',
    zIndex: 9,
  },
});
