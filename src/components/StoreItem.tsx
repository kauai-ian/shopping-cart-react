import { FC } from "react";
import { ItemType } from "../context/ShoppingCartContext";
import { Quantities } from "../pages/store";

type StoreItemProps = ItemType & {
  handleQuantityChange: (id: number, quantity: number) => void;
  handleAddToCart: (id: number) => void;
  quantities: Quantities;
};

const StoreItem: FC<StoreItemProps> = ({
  id,
  title,
  price,
  image,
  handleAddToCart,
  handleQuantityChange,
  quantities,
}) => {
  return (
    <div key={id} className="">
      <div className="bg-white h-full rounded flex flex-col items-center p-2">
        <img src={image} alt={title} className="max-h-24 mx-auto" />
        <p className="text-center">
          {title}
          <br />${price}
        </p>

        <select
          className="mt-2 p-2 rounded-md"
          value={quantities[id] || 1}
          onChange={(e) =>
            handleQuantityChange(id, parseInt(e.target.value, 10))
          }
        >
          {[1, 2, 3, 4, 5].map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
        <button
          className="bg-yellow-200 p-2 rounded-lg active:bg-blue-500"
          onClick={() => handleAddToCart(id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default StoreItem;
