import { createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ value, children }) {
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
