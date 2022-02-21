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

import { LinearGradient } from 'expo-linear-gradient';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as pokemonActions from '../store/actions/pokemon';

//Components
import ItemsPokeShop from '../components/itemsPokeShop';

export default function PokeShop(props) {
  const items = useSelector((state) => state.pokeShopReducer.items);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/img/centerPokemon.jpg')}
          resizeMode='cover'
          style={styles.background}
        >
          <FlatList
            data={items}
            renderItem={({ item }) => <ItemsPokeShop item={item} />}
            keyExtractor={(item, index) => index}
          />
        </ImageBackground>
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

  background: {
    flex: 1,
    position: 'relative',
    zIndex: -2,
  },


});
