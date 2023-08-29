import { Product } from "./Product";

export interface CartItem extends Product {
  quantity: number;
}

export type CartItems = CartItem[] | [];

export interface CartState {
  cartItems: CartItems;
  isCartOpen: boolean;
}

export enum CartActions {
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
}

export interface SetCartAction {
  type: CartActions.SET_CART_ITEMS;
  payload: CartItems;
}

export interface SetIsCartOpenAction {
  type: CartActions.SET_IS_CART_OPEN;
  payload: boolean;
}

export type CartActionTypes = SetCartAction | SetIsCartOpenAction;
