import { ReactNode, createContext, useContext, useState } from "react";
import { ItemProps } from "../pages/store";

export type ShoppingCartProps = {
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  getItemQuantity: (id: number) => number;
  cartQuantity: number;
  cartItems: CartItem[];
};

type CartItem =  ItemProps & {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartProps);

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a shoppingCartProvider"
    );
  }
  return context;
}

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    const item = cartItems.find((item: { id: number }) => item.id === id);
    return item ? item.quantity : 0;
  };

  const addItem = (id: number) => {
    const selectedItem = items.find((item) => item.id === id)
    if (selectedItem) {
    setCartItems((prev) => [...prev,{...selectedItem, quantity: 1}])
    }console.log("adding items context", cartItems);
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  console.log("Context initialized", { addItem, removeItem, getItemQuantity, cartQuantity, cartItems });

  return (
    <ShoppingCartContext.Provider
      value={{ addItem, removeItem, getItemQuantity, cartQuantity, cartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
