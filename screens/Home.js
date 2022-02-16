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
import { getRandomInt } from '../utils/utils';
import { Audio } from 'expo-av';

//components
import Pokemon from '../components/Pokemon';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as pokemonActions from '../store/actions/pokemon';

export default function App(props) {
  const [counterPokemon, setCounterPokemon] = useState(getRandomInt(0, 150));
  const [pokemonVisible, setPokemonVisible] = useState(false);
  const [pokeballNoActif, setPokeballNoActif] = useState(false);

  async function playSound(source) {
    const { sound } = await Audio.Sound.createAsync(source.file);

    await sound.playAsync();
  }

  const pokemon = useSelector((state) => state.pokemon.pokemons);
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    dispatch(pokemonActions.getPokemon());
    fadeIn();
  }, []);

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

    playSound({ file: require('../assets/mp3/4.mp3') });
    setPokemonVisible(false);
    setPokeballNoActif(false);
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    const delayPop = getRandomInt(1000, 20000);
    setTimeout(() => {
      fadeIn();
      setCounterPokemon(getRandomInt(0, 150));
    }, delayPop);

    playSound({ file: require('../assets/mp3/soundPokeball.mp3') });
    dispatch(pokemonActions.addPokemon(pokemon[counterPokemon]));
    setPokemonVisible(true);
    setPokeballNoActif(true);
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
                  pokemonVisible={pokemonVisible}
                />
              </Animated.View>
              <TouchableOpacity
                disabled={pokeballNoActif}
                activeOpacity={0.1}
                onPress={fadeOut}
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
