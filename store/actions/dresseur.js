import api from '../../utils/api';

export const SUPPR_STOCK_POKEBALL = 'SUPPR_STOCK_POKEBALL';
export const ADD_MONEY = 'ADD_MONEY';


export const supprStockPokeball = () => ({
  type: SUPPR_STOCK_POKEBALL,
});

export const addMoney = () => ({
  type: ADD_MONEY,
});


