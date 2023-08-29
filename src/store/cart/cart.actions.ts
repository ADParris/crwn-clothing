import { CartActions, CartItems } from "../../types/Cart";
import { Product } from "../../types/Product";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (
  cartItems: CartItems,
  productToAdd: Product
): CartItems => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (
  cartItems: CartItems,
  cartItemToRemove: Product
): CartItems => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

const removeCartItem = (
  cartItems: CartItems,
  cartItemToRemove: Product
): CartItems => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemToCart = (cartItems: CartItems, productToAdd: Product) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CartActions.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItems,
  cartItemToRemove: Product
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToRemove);
  return createAction(CartActions.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItems,
  cartItemToRemove: Product
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CartActions.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (isCartOpen: boolean) =>
  createAction(CartActions.SET_IS_CART_OPEN, isCartOpen);
