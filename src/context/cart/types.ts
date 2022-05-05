import { AuthUserProps } from '../auth/types';

export const INIT = 'INIT';
export const ADD_ITEM = 'CART_ADD_ITEM';
export const REMOVE_ITEM = 'CART_REMOVE_ITEM';

export interface CartReducerState {
  items: ProductProps[];
  count: number;
}

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  items: ProductProps[];
  count: number;
  addItem: (product: ProductProps) => void;
  removeItem: (id: string, quantity: number) => void;
}

export interface InitAction {
  type: typeof INIT;
  data: CartReducerState;
}

export interface AddItemAction {
  type: typeof ADD_ITEM;
  product: ProductProps;
  user: AuthUserProps;
}

export interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  id: number;
  quantity: number;
}

export type CartAction = InitAction | AddItemAction | RemoveItemAction;
