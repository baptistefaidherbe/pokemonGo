import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Image } from 'react-native';

//Screen
import HomeScreen from '../screens/Home';
import MyPokemonScreen from '../screens/MyPokemon';
import DetailsPokemon from '../screens/DetailsPokemon';

const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
  const headerOptions = {
    headerTintColor: 'red',
    headerTitleAlign: 'center',
    headerShown: false,
    headerStyle: {
      backgroundColor: 'rgba(243,243,243,0.5)',
    },
  };
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ image, focused }) => {
          if (route.name == 'TabHome') {
            image = focused ? require('../assets/img/iconsPokeball2.png') : require('../assets/img/iconsPokeball.png') ;
          } else if (route.name == 'TabMyPokemon') {
            image = focused ? require('../assets/img/iconsPikachu2.png') : require('../assets/img/iconsPikachu.png');
          }

          return <Image source={image} style={{ width: 30, height: 30 }} />;
        },

        tabBarLabel: () => {
          let name;

          if (route.name == 'TabHome') {
            name = 'Capture';
          } else if (route.name == 'TabMyPokemon') {
            name = 'Ma team';
          }

          return (
            <Text
              style={{
                fontSize: 15,
              }}
            >
              {name}
            </Text>
          );
        },

        tabBarStyle: {
          backgroundColor:
            route.name == 'TabHome' ? 'rgba(243,243,243,0.5)' : 'white',
          height: 80,
          position: 'absolute',
          elevation: 0,
          
        },
      })}
    >
      <TabNavigator.Screen
        name='TabHome'
        component={HomeScreen}
        options={{ title: 'Home', fontSize: 200, ...headerOptions }}
      />
      <TabNavigator.Screen
        name='TabMyPokemon'
        component={MyPokemonScreen}
        options={{ title: 'Ma team ', ...headerOptions, headerShown: true }}
      />
    </TabNavigator.Navigator>
  );
};

const StackNavigator = createStackNavigator();

export const AppStacksNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name='app'
        component={AppTabNavigator}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen name='DetailPokemon' component={DetailsPokemon} />
    </StackNavigator.Navigator>
  );
};
