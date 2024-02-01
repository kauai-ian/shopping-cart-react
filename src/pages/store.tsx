import Navbar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getData } from "../helpers/api";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Loading } from "../components/Loading";
import { ItemType } from "../context/ShoppingCartContext";
import StoreItem from "../components/StoreItem";

export type Quantities = { [key: number]: number };

const loadingArray = Array.from({ length: 12 }, (_, index) => index);

export function Store() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantities, setQuantities] = useState<Quantities>({});

  const { addItem } = useShoppingCart();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const itemsData = await getData();
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

  const getItems = (id: number): ItemType | undefined => {
    return items.find((item) => item.id === id);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const handleAddToCart = (id: number) => {
    const item = getItems(id);
    if (!item) return;
    console.log("clicked add");
    addItem({ ...item, quantity: quantities[id] || 1 });
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center">Store </h1>
      <div className=" gap-4 p-2 grid md:grid-cols-4 sm:grid-cols-1">
        {isLoading
          ? loadingArray.map((index) => <Loading key={index} />)
          : items.map((item) => (
              <StoreItem
              quantities={{}} key={item.id}
              {...item}
              handleAddToCart={handleAddToCart}
              handleQuantityChange={handleQuantityChange}              />
            ))}
      </div>
    </>
  );
}
