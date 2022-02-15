import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';

//Screen
import HomeScreen from '../screens/Home';
import MyPokemonScreen from '../screens/MyPokemon';
import DetailsPokemon from '../screens/DetailsPokemon';

const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'TabHome') {
            iconName = 'home';
          } else if (route.name == 'TabMyPokemon') {
            iconName = 'pokeball';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        activeTintColor: 'red',
      })}
    >
      <TabNavigator.Screen
        name='TabHome'
        component={HomeScreen}
        options={{ title: 'Home ' }}
      />
      <TabNavigator.Screen
        name='TabMyPokemon'
        component={MyPokemonScreen}
        options={{ title: 'Mon équipe ' }}
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
