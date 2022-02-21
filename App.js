import React from 'react';

//Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './store/reducers/pokemon';
import dresseurREducer from './store/reducers/dresseur';
import thunk from 'redux-thunk';

//Components
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  dresseur: dresseurREducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
