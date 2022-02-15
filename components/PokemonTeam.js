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
  ImageBackground,
} from 'react-native';
import pokemon from '../store/reducers/pokemon';

export default function PokemonTeam(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            props.onClickPokemon(
              props.pokemon.id,
              props.pokemon.name,
              props.pokemon.level,
              props.pokemon.sexe,
              props.pokemon.src
            )
          }
        >
          <Image
            source={{
              uri: props.pokemon.sprite,
            }}
            style={styles.imagePokemon}
          />
          <View>
            <Text>{props.pokemon.name}</Text>
            <Text> Level : {props.pokemon.level}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(243,243,243,0.5)',
    marginBottom: 10,
    justifyContent:'center'
  },
  imagePokemon: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
});
