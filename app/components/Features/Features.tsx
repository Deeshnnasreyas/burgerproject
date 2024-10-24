import Image from "next/image";
import burger5 from "@/public/images/burger11.jpeg";
import burger6 from "@/public/images/burger12.jpeg";
import burger10 from "@/public/images/burger13.jpeg";
const Features = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading text-center text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] uppercase font-bold text-gray-900">
        Burger made with <br />
        Love and <span className="text-red-500">Care</span>
      </h1>
      <div className="w-[90%] md:w-[80% mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        {/* 1st card */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg lg:translate-y-[3rem] transition-all duration-300 items-center">
            <Image
              src={burger5}
              alt="burger"
              className="rounded-3xl w-full object-cover"
            />
            <h1 className="mt-[0.2rem] text-opacity-60 text-center font-semibold text-red-500">
              Our Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ullam cupiditate quae labore enim, quis veritatis ab, accusantium
              iusto, vel laborum tenetur eius quasi quisquam accusamus omnis
              dolore in ducimus!
            </p>
          </div>
        </div>
        {/* 2st card */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-300 items-center">
            <Image
              src={burger6}
              alt="burger"
              className="rounded-3xl  w-full object-cover"
            />
            <h1 className="mt-[0.2rem] text-red-500 text-opacity-60 text-center font-semibold">
              Your Opinion is important
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ullam cupiditate quae labore enim, quis veritatis ab, accusantium
              iusto, vel laborum tenetur eius quasi quisquam accusamus omnis
              dolore in ducimus!
            </p>
          </div>
        </div>
        {/* 3st card */}
        <div>
          <div className="p-6 hover:bg-white rounded-lg  lg:translate-y-[3rem]  transition-all duration-300 items-center">
            <Image
              src={burger10}
              alt="burger"
              className="rounded-3xl w-full object-cover"
            />
            <h1 className="mt-[0.2rem] text-red-500 text-opacity-60 text-center font-semibold">
              Chicken Burger
            </h1>
            <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ullam cupiditate quae labore enim, quis veritatis ab, accusantium
              iusto, vel laborum tenetur eius quasi quisquam accusamus omnis
              dolore in ducimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
