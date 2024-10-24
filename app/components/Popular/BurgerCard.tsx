import {
  FaShoppingBag, FaStar
} from "react-icons/fa";
import burger3 from "@/public/images/burger3.jpeg";
import Image from "next/image";
const BurgerCard = () => {
  return (
    <div className="bg-white rounded-lg p-6 m-3">
      <div className="w-[250px] mx-auto h-[200px]">
        <Image
          alt="images"
          src={burger3}
          className="w-[100%] h-[100%] object-cover rounded-lg"
        />
      </div>
      <h1 className="flex mt-[0.5rem] space-x-3 font-bold text-center justify-center text-brown-500">
        Burger Trend
      </h1>
      <div className="flex items-center mt-[0.5rem] space-x-3">
        <div className="flex items-center">
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
          <FaStar className="w-[1rem] h-[1rem] text-yellow-400" />
        </div>
        <div className="text-black opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. excepturi.
        </div>
      </div>
      <p className="mt-[0.5rem] text-black text-opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex mt-[1.4rem] items-center justify-between">
        <h1 className="text-[25px] font-bold text-red-600">$45.00/-</h1>
        <button className="bg-orange-500 items-center rounded-lg px-5 text-white h-[2rem] hover:bg-green-400 transition-all duration-500">
          <FaShoppingBag className=" w-[1.3rem] h-[1.3rem]" />
        </button>
      </div>
    </div>
  );
};

export default BurgerCard;
