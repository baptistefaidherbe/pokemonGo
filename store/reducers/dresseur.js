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
    },
    {
      stockPokeball: 0,
      src: require('../../assets/img/superball.png'),
    },
    {
      stockPokeball: 0,
      src: require('../../assets/img/hyperball.png'),
    },
  ],

  money: 50,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPPR_STOCK_POKEBALL:
      return {
        ...state,
        pokeball: [
          ...state.pokeball,
          (state.pokeball[0].stockPokeball =
            state.pokeball[0].stockPokeball - 1),
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
          (state.pokeball[0].stockPokeball =
            state.pokeball[0].stockPokeball + 1),
        ],
        money: state.money - 20,
      };

    default:
      return state;
  }
};
