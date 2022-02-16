import React, { useEffect } from 'react';
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
  ImageBackground,
} from 'react-native';

//utils
import criesPokemon from '../utils/criesPokemon';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as pokemonActions from '../store/actions/pokemon';

export default function DetailsPokemon(props) {
  const dispatch = useDispatch();
  const pokemonType = useSelector((state) => state.pokemon.pokemonType);

  useEffect(() => {
    dispatch(pokemonActions.getPokemonType(props.route.params.id));
  }, []);

  const pokemonSound = () => {
    const id = props.route.params.id - 1;
    criesPokemon(id);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/landscape2.jpg')}
        resizeMode='cover'
        style={styles.background}
      >
        <View style={styles.containerPokemon}>
          <Text style={styles.title}>{props.route.params.name}</Text>
          <View>
            <Text style={styles.text}>Id : {props.route.params.id}</Text>
            <Text style={styles.text}>Level : {props.route.params.level}</Text>
            <Text style={styles.text}>Sexe : {props.route.params.sexe}</Text>

            <Text style={styles.text}>
              Type :{' '}
              {pokemonType.map((type, index) => (
                <Text style={styles.text} key={index}>
                  {index === 1 && '- '}
                  {type.type.name}{' '}
                </Text>
              ))}
            </Text>
          </View>
          <TouchableOpacity onPress={pokemonSound}>
            <Image
              source={{
                uri: props.route.params.src,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerPokemon: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  background: {
    flex: 1,
  },

  text: {
    color: 'white',
  },

  title: {
    color: 'white',
    fontSize: 30,
  },

  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
  },
});
