import Navbar from "../components/NavBar";
import { useEffect, useState } from "react";

type ItemProps = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export function Store() {
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Store </h1>
      <div className=" gap-4 p-2 flex flex-wrap">
        {items.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
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
              <div className="bg-yellow-200 p-2 rounded-lg">Add to Cart</div>
              <div></div>
              <div></div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}
