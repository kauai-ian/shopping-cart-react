import { createContext, useContext, useState } from "react";

export type ShoppingCartProps = {
  addItem: () => void;
  removeItem: () => void;
  quantity: number;
  id: string;
  cartQuantity: number;
  cartItems: [];
};

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState({});
  const quantity = 0;

  const addItem = (itemId: string, quantity: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity,
    }));
  };

  const removeItem = (itemId: string) => {
    setCartItems((prev) => {
        const updatedCart = {...prev};
        delete updatedCart[itemId];
        return updatedCart;
    })
  }

  return (
    <ShoppingCartContext.Provider value={{cartItems, addItem, removeItem}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}