import Navbar from "../components/NavBar";
import { useShoppingCart } from "../hooks/useShoppingCart";
import CartItem from "../components/CartItem";

export function Cart() {
  const { cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((acc, {quantity, price}) => {
    return acc + quantity * parseFloat(price)
  }, 0)
  return (
    <>
      <Navbar />
      <h1 className=" mt-4 text-center text-4xl">Shopping cart</h1>
      <div className="mt-4 p-4">
        <div>
          <ul>
            {
              cartItems.map(({ id, quantity, title, price, image }) => (
                <li key={id}>
                  <CartItem
                    id={id}
                    quantity={quantity}
                    title={title}
                    price={price}
                    image={image}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-4 text-xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </>
  );
}
