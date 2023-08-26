import { Dispatch, createContext, useState } from "react";

interface CartContextProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextProps>({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
