// Librairies
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

export default function DrawerContentScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        {/* <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/img/logo.png')}
            style={styles.logo}
          />
        </View> */}

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 84,
    marginBottom: 15,
    resizeMode: 'contain',
  },
});


