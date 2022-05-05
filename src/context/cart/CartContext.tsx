import { createContext, FC, useCallback, useContext, useEffect, useMemo, useReducer } from 'react';
import { useAuth } from '../auth/AuthContext';
import { initialState, reducer } from './reducer';
import { ADD_ITEM, CartContextType, INIT, REMOVE_ITEM } from './types';

export const CartContext = createContext({} as CartContextType);

export const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();

  const { items, count } = state;

  const addItem = useCallback((product) => {
    dispatch({ type: ADD_ITEM, product, user });
  }, [dispatch]);

  const removeItem = useCallback((id, quantity) => {
    dispatch({ type: REMOVE_ITEM, id, quantity});
  }, [dispatch]);

  const context = useMemo(() => ({
    items,
    count,
    addItem,
    removeItem
  }), [items, count, addItem, removeItem]);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cart'));
    dispatch({ type: INIT, data });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(context));
  }, [context]);

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
