"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import burger3 from "@/public/images/burger3.jpeg";
import burger5 from "@/public/images/burger5.jpeg";
import burger10 from "@/public/images/burger10.jpeg";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Hero = () => {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      itemClass="item"
      showDots={true}
    >
      {/* first slider */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip-path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={burger3} alt="burger" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Fast Food Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Best <br />Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              saepe quos veritatis illo velit autem animi rerum quibusdam
              voluptas vero molestias, adipisci quidem itaque quis similique
              ratione? Earum, ipsa velit.
            </p>
            <button
              className="px-6 mt-[2rem] py-3 text-[16px] bg-green-500
           transiltion-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] " />
              </span>
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
      {/* 2nd slider */}
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip-path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={burger5} alt="burger" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Tasty Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top <br />
              Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              saepe quos veritatis illo velit autem animi rerum quibusdam
              voluptas vero molestias, adipisci quidem itaque quis similique
              ratione? Earum, ipsa velit.
            </p>
            <button
              className="px-6 mt-[2rem] py-3 text-[16px] bg-blue-500
           transiltion-all duration-200 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] " />
              </span>
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-violet-950 md:clip-path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <Image src={burger10} alt="burger" className="hidden md:block" />
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Hoe Made Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top Quality <br />
              Burger
            </h1>
            <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              saepe quos veritatis illo velit autem animi rerum quibusdam
              voluptas vero molestias, adipisci quidem itaque quis similique
              ratione? Earum, ipsa velit.
            </p>
            <button
              className="px-6 mt-[2rem] py-3 text-[16px] bg-yellow-500
           transiltion-all duration-200 hover:bg-yellow-700 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.3rem] h-[1.3rem] " />
              </span>
              <span>Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
