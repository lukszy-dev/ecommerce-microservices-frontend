import api from '../../api';
import { INIT, ADD_ITEM, REMOVE_ITEM, CartAction, CartReducerState } from './types';

export const initialState = {
  items: [],
  count: 0
};

export const reducer = (
  state: CartReducerState,
  action: CartAction
): CartReducerState => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        ...action.data
      };
    case ADD_ITEM:
      if (action.user.email && action.user.role) {
        api.addToCart(action.product.id);
      }

      let items;
      if (state.items.findIndex(item => item.id === action.product.id) > -1) {
        items = state.items.map(item => {
          if (item.id === action.product.id) {
            item.quantity += action.product.quantity;
          }
          return item;
        });
      } else {
        items = [...state.items, action.product];
      }

      return {
        ...state,
        items,
        count: items.length
      };
    case REMOVE_ITEM:
      items = state.items.filter(item => item.id !== action.id);
      return {
        ...state,
        items
      };
  }
};
