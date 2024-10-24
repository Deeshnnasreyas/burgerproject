import Image from "next/image";
import delivery from "@/public/images/delivery.jpeg";
import { RiEBike2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";

const Delivery = () => {
  return (
    <div className="pt-[4rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* image */}
        <div className="">
          <Image
            src={delivery}
            alt="delivery"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        {/* Text content */}
        <div>
          <h1
            className="text-[30px] uppercase md:text-[40px] lg:text-[50px] xl-text-[60px] font-bold
                  leading-[3rem] md:leading-[4rem]"
          >
            Your <span className="mr-2">Favorite Burger</span>
            {""}
            <span className="text-red-500 mr-2">On the way</span>
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit
            velit excepturi nobis iste sunt doloribus omnis fugit repellat
            numquam nulla aspernatur dolore vitae natus, vero quis
            necessitatibus libero a!
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 min
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Free shipping from 75$
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery on your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
