"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCard from "./BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};
const Popular = () => {
  return (
    <div className="mt-[3rem] pb-[3rem] ">
      <h1 className="font-bold tracking-wide text-black text-2xl md:text-6xl text-center">
        Our Popular <span className="text-red-500">Burgers</span>
      </h1>
      <div className="mx-auto w-[80%] mt-[4rem] items-center gap-4">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          infinite
          autoPlaySpeed={4000}
          centerMode={false}
          itemClass="item"
          showDots={false}
        >
          <BurgerCard />
          <BurgerCard />
          <BurgerCard />
          <BurgerCard />
          <BurgerCard />
        </Carousel>
      </div>
    </div>
  );
};

export default Popular;
