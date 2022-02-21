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
import * as Animatable from 'react-native-animatable';
import { getRandomInt } from '../utils/utils';

export default function Pokemon(props) {
  const randomAnimation = () => {
    let animation;
    const random = getRandomInt(1, 3);
    switch (random) {
      case 1:
        animation = 'slideOutLeft';
        break;
      case 2:
        animation = 'bounce';
        break;
      case 3:
        animation = 'slideOutDown';
        break;

      default:
        break;
    }

    return animation;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.pokemon}>
          {props.message}
          <TouchableOpacity
            disabled={props.pokemonNoVisible}
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
            <Animatable.View
              animation={randomAnimation()}
              direction='alternate-reverse'
              easing='ease-in-out'
              iterationCount='infinite'
              style={{ textAlign: 'center' }}
            >
              <Image
                source={{
                  uri: props.pokemon.src,
                }}
                style={styles.image}
              />
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
  },

  bold: {
    fontWeight: 'bold',
  },

  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 100,
    marginTop: 60,
  },
});
