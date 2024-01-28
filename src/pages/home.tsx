import { useNavigate } from "react-router-dom";
import aloha1 from "../assets/aloha1.jpeg"
import aloha2 from "../assets/aloha2.webp"
import aloha4 from "../assets/aloha4.jpeg"



export function Home() {

    const navigate = useNavigate()

    const handleShopClick = () => {navigate("/store")}
  return (
    <>
      <div className="container h-screen flex flex-col items-center ">
        <div className="w-screen p-6 my-6 rounded-md bg-slate-400"><h1 className="text-center text-4xl font-mono font-semibold">Aloha Expressions</h1></div>
        <button className="rounded-md bg-orange-300 p-4 my-14 h-min w-max text-xl" onClick={handleShopClick}>Shop Now</button>
      <div className="flex col-span-3 gap-8">
        <img src={aloha1} alt=""  className="w-48 h-auto"/>
        <img src={aloha2} alt=""  className="w-48 h-auto"/>
        <img src={aloha4} alt=""  className="w-48 h-auto"/>
      </div></div>
      
    </>
  );
}
