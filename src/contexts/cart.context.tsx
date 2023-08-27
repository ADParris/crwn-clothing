import { Dispatch, createContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

export interface CartItem extends Product {
  quantity: number;
}

type CartItems = CartItem[] | [];

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

interface CartContextProps {
  addItemToCart: (productToAdd: Product) => void;
  cartCount: number;
  cartItems: CartItems;
  clearItemFromCart: (productToRemove: Product) => void;
  isCartOpen: boolean;
  removeItemFromCart: (productToRemove: Product) => void;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
  cartTotal: number;
}

export const CartContext = createContext<CartContextProps>({
  addItemToCart: () => [],
  cartCount: 0,
  cartItems: [],
  cartTotal: 0,
  clearItemFromCart: () => {},
  isCartOpen: false,
  removeItemFromCart: () => {},
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItems>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const newCartCount = (cartItems as CartItem[]).reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = (cartItems as CartItem[]).reduce(
      (total: number, cartItem: CartItem) =>
        total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const clearItemFromCart = (cartItemToRemove: Product) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const removeItemFromCart = (cartItemToRemove: Product) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const value = {
    addItemToCart,
    cartCount,
    cartItems,
    cartTotal,
    clearItemFromCart,
    isCartOpen,
    removeItemFromCart,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
