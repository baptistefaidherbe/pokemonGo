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
  Button,
} from 'react-native';

export default function itemsPokeShop(props) {
  const buyPokeball = () => {
    switch (props.item.name) {
      case 'Pokeball':
        if (props.money > 0) props.buyPokeball();

        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.items}>
          <TouchableOpacity
            disabled={props.pokemonNoVisible}
            activeOpacity={0.5}
            onPress={buyPokeball}
          >
            <View style={{ alignItems: 'center' }}>
              <Image source={props.item.img} style={styles.item} />
              <Text>{props.item.name}</Text>
              <Text>{props.item.price} ₽</Text>
              <Button title='Commander' color='#841584' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    position: 'relative',
    zIndex: 1,
  },

  items: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(243,243,243,0.5)',
    marginBottom: 12,
    padding: 10,
  },

  input: {
    backgroundColor: 'red',
    padding: 10,
  },
});
