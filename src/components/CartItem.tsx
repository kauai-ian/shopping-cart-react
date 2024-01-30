import { useShoppingCart } from "../context/ShoppingCartContext";
import { ItemProps } from "../pages/store";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem, cartItems } = useShoppingCart();

  const item = cartItems.find((item) => item.id === id);
  if (!item)  return null; 

  return (
    <div className="">
      <img src={item.image} alt={item.title} className="w-16 h-auto" />
      <div>
        <p className="font-semibold">{item.title}</p>
        <p>${item.price}</p>
      </div>
      <div>
        {quantity > 1 && (
          <span className="text-grey-400">x{quantity}</span>
        )}

        <button
          onClick={() => removeItem(id)}
          className="bg-transparent hover:bg-red-500 text-red-300 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
