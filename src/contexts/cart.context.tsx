import { Dispatch, createContext, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface CartItem extends Product {
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

interface CartContextProps {
  addItemToCart: (productToAdd: Product) => void;
  cartCount: number;
  cartItems: CartItems;
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextProps>({
  addItemToCart: () => [],
  cartCount: 0,
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItems>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const newCartCount = (cartItems as CartItem[]).reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    addItemToCart,
    cartCount,
    cartItems,
    isCartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
