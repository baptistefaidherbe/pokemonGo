import {
  SUPPR_STOCK_POKEBALL,
  ADD_MONEY,
  ADD_POKEBALL,
} from '../actions/dresseur';

const initialState = {
  pokeball: [
    {
      stockPokeball: 50,
      src: require('../../assets/img/pokeball.png'),
      name: 'pokeball'
    },
    {
      stockPokeball: 0,
      src: require('../../assets/img/superball.png'),
      name: 'superball'
    },
    {
      stockPokeball: 0,
      src: require('../../assets/img/hyperball.png'),
      name: 'hyperball'
    },
  ],

  money: 500,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPPR_STOCK_POKEBALL:
      return {
        ...state,
        pokeball: [
          ...state.pokeball,
          (state.pokeball[action.index].stockPokeball =
            state.pokeball[action.index].stockPokeball - 1),
        ],
      };
    case ADD_MONEY:
      return {
        ...state,
        money: state.money + 20,
      };

    case ADD_POKEBALL:
      return {
        ...state,
        pokeball: [
          ...state.pokeball,
          (state.pokeball[action.index].stockPokeball =
            state.pokeball[action.index].stockPokeball + 1),
        ],
        money: state.money - 20,
      };

    default:
      return state;
  }
};
