import { SUPPR_STOCK_POKEBALL } from '../actions/dresseur';

const initialState = {
  stockPokeball: 50,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPPR_STOCK_POKEBALL:
      console.log('ici')
      return {
        ...state,
        stockPokeball: state.stockPokeball -1,
      };

    default:
      return state;
  }
};
