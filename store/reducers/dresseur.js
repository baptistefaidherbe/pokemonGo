import { SUPPR_STOCK_POKEBALL, ADD_MONEY } from '../actions/dresseur';

const initialState = {
  stockPokeball: 50,
  money: 50,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPPR_STOCK_POKEBALL:
      return {
        ...state,
        stockPokeball: state.stockPokeball - 1,
      };
    case ADD_MONEY:
      return {
        ...state,
        money: state.money + 20,
      };

    default:
      return state;
  }
};
