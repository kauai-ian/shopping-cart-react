import Navbar from "../components/NavBar";
import { useEffect, useState } from "react";
import {getData} from "../helpers/api"
import { useShoppingCart } from "../context/ShoppingCartContext";

export type ItemProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
  
};

const loadingArray = Array.from({ length: 12 }, (_, index) => index);

const Loading = () => (
  <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
    <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
    <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
    <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
    <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
  </div>
);

export function Store() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

 const { addItem } = useShoppingCart();

  useEffect(() => {
    const dataFetch = async () => {
    try {
      const itemsData = await getData()
      setItems(itemsData);
    } catch (error) {
      console.error(error);
    } finally {
      //2 second delay
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  
    dataFetch();
  }, []);


  // const getItems = (id: number): ItemProps => {
  //   return items.find((item) => item.id === id) || {id: 0, title: "", price: "", image: "", quantity: 0 }
  // }

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const handleAddToCart = (id: number) => {
    // const quantity = quantities[id] || 1;
    // setItems((prevItems) => {
    //   const updatedItems = prevItems.map((item) =>
    //     item.id === id
    //       ? { ...item, quantity: (item.quantity || 0) + quantity }
    //       : item
    //   );
      console.log( "clicked add")
      // return updatedItems;
    addItem(id);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center">Store </h1>
      <div className=" gap-4 p-2 grid md:grid-cols-4 sm:grid-cols-1">
        {isLoading
          ? loadingArray.map((index) => <Loading key={index} />)
          : items.map((item) => (
              <div key={item.id} className="">
                <div className="bg-white h-full rounded flex flex-col items-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-24 mx-auto"
                  />
                  <p className="text-center">
                    {item.title}
                    <br />${item.price}
                  </p>

                  <select
                    className="mt-2 p-2 rounded-md"
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                  >
                    {[1, 2, 3, 4, 5].map((quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                  <button
                    className="bg-yellow-200 p-2 rounded-lg"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
