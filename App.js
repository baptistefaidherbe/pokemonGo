import React from 'react';

//Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './store/reducers/pokemon';
import dresseurReducer from './store/reducers/dresseur';
import pokeShopReducer from './store/reducers/pokeShop';
import thunk from 'redux-thunk';

//Components
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  dresseur: dresseurReducer,
  pokeShopReducer: pokeShopReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
