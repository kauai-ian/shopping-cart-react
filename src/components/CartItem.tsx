import { useShoppingCart } from "../hooks/useShoppingCart";
import { CartItem } from "../context/ShoppingCartContext";

function Item({ id, quantity }: CartItem) {
  const { removeItem, cartItems } = useShoppingCart();

  const item = cartItems.find((item) => item.id === id);
  if (!item) return null;

  return (
    <div className="flex items-center justify-between border-2 border-gray-300 p-4">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.title} className="w-16 h-auto" />
        <div className=" ">
          <p className="font-semibold">{item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        {quantity > 1 && <span className="text-grey-400">x{quantity}</span>}

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
export default Item;
