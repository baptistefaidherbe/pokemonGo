import React from 'react';
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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as pokemonActions from '../store/actions/pokemon';

//Components
import PokemonTeam from '../components/PokemonTeam';

export default function MyPokemon(props) {
  const pokemon = useSelector((state) => state.pokemon.pokemonTeam);
  const dispatch = useDispatch();

  const removePokemon = (index) => {
    dispatch(pokemonActions.removePokemon(index))
  }

  const pokemonDetails = (id, name, level, sexe, src) => {
    props.navigation.navigate('DetailPokemon', {
      id,
      name,
      level,
      sexe,
      src,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient style={{ flex: 1 }} colors={['#22c1c3', '#fdbb2d']}>
          <FlatList
            data={pokemon}
            renderItem={({ item, index }) => (
              <PokemonTeam pokemon={item} index={index} removePokemon={removePokemon} onClickPokemon={pokemonDetails} />
            )}
            keyExtractor={(item, index) => index}
          />
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 80,
  },

  imagePokemon: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
  },
});
