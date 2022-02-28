import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

//Redux
import { useSelector } from 'react-redux';

//Screen
import HomeScreen from '../screens/Home';
import MyPokemonScreen from '../screens/MyPokemon';
import DetailsPokemonScreen from '../screens/DetailsPokemon';
import PokeShopScreen from '../screens/PokeShop';

//components
import DrawerContentScreen from '../screens/drawer/DrawerContent';

//DrawerNaviagator
const DrawerNavigator = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
        },
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'black',
      }}
      drawerContent={(props) => <DrawerContentScreen {...props} />}
    >
      <DrawerNavigator.Screen
        options={{ headerShown: false }}
        name='Trails'
        component={AppStacksNavigator}
      />
      <DrawerNavigator.Screen
        options={{ headerShown: false }}
        name='Shop'
        component={AppTabNavigator}
      />
    </DrawerNavigator.Navigator>
  );
};

const TabNavigator = createBottomTabNavigator();

const AppTabNavigator = () => {
  const headerOptions = {
    headerTintColor: 'orange',
    headerTitleAlign: 'center',
    headerShown: true,
    headerStyle: {
      backgroundColor: 'rgba(243,243,243,0.5)',
    },
  };

  const option = ({ navigation }) => {
    const money = useSelector((state) => state.dresseur.money);
    return {
      headerTitleAlign: 'center',
      title: 'toto',
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 20 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            source={require('../assets/img/bag.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => <Text style={{ marginRight: 20 }}>{money} ₽</Text>,

      ...headerOptions,
    };
  };
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ image, focused }) => {
          if (route.name == 'TabHome') {
            image = focused
              ? require('../assets/img/iconsPokeball2.png')
              : require('../assets/img/iconsPokeball.png');
          } else if (route.name == 'TabMyPokemon') {
            image = focused
              ? require('../assets/img/iconsPikachu2.png')
              : require('../assets/img/iconsPikachu.png');
          } else if (route.name == 'TabPokeShop') {
            image = focused
              ? require('../assets/img/iconsPokeShop2.png')
              : require('../assets/img/iconsPokeShop.png');
          }

          return <Image source={image} style={{ width: 30, height: 30 }} />;
        },

        tabBarLabel: () => {
          let name;

          if (route.name == 'TabHome') {
            name = 'Capture';
          } else if (route.name == 'TabMyPokemon') {
            name = 'Mon équipe';
          } else if (route.name == 'TabPokeShop') {
            name = 'Poke Shop';
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
        options={option}
      />
      <TabNavigator.Screen
        name='TabMyPokemon'
        component={MyPokemonScreen}
        options={option}
      />
      <TabNavigator.Screen
        name='TabPokeShop'
        component={PokeShopScreen}
        options={option}
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
      <StackNavigator.Screen
        name='DetailPokemon'
        component={DetailsPokemonScreen}
      />
    </StackNavigator.Navigator>
  );
};
