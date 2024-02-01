import { useContext } from "react";
import {ShoppingCartContext} from "../context/ShoppingCartContext"

export function useShoppingCart() {
    const context = useContext(ShoppingCartContext);
    if (!context) {
      throw new Error(
        "useShoppingCart must be used within a shoppingCartProvider"
      );
    }
    return context;
  }