import Navbar from "../components/NavBar";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";

export function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <Navbar />
      <div>Shopping cart</div>
      <div>
        <ul>
          {Array.isArray(cartItems) &&
            cartItems.map(({ id, quantity, item }) => (
              <li key={id}>
                <CartItem id={id} quantity={quantity} item={item} />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
