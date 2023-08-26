import { createContext, useState } from "react";

import PRODUCTS from "../temp/data/shop.json";

export const ProductsContext = createContext({ products: PRODUCTS });

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
