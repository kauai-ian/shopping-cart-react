import { ReactNode, createContext, useState } from "react";

export type ShoppingCartProps = {
  addItem: (item: ItemType) => void;
  removeItem: (id: number) => void;
  getItemQuantity: (id: number) => number;
  cartQuantity: number;
  cartItems: CartItem[];
};

export type CartItem = ItemType & {
  id: number;
  quantity: number;
};

export type ItemType = {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
};

export const ShoppingCartContext = createContext({} as ShoppingCartProps);

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

  const addItem = (_item: ItemType) => {
    const selectedItem = cartItems.find((item) => item.id === _item.id);
    if (selectedItem) {
      return setCartItems((prev) => {
        return prev.map((item) => {
          if (item.id === _item.id) {
            return { ...item, quantity: _item.quantity + _item.quantity };
          }
          return item;
        });
      });
    }
    setCartItems((prev) => [...prev, { ..._item, quantity: _item.quantity }]);
    console.log("adding items context", cartItems);
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  console.log("Context initialized", {
    addItem,
    removeItem,
    getItemQuantity,
    cartQuantity,
    cartItems,
  });

  return (
    <ShoppingCartContext.Provider
      value={{ addItem, removeItem, getItemQuantity, cartQuantity, cartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
