import Link from "next/link";
import { BiCycling } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
const Nav = () => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto h-[100%] flex items-center justify-between">
        {/* logo div */}
        <div className="flex items-center space-x-2">
          <GiHamburger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-400" />
          <h1 className="text-[20px] sm:text-[30px] font-semibold">
            BurgerBite
          </h1>
        </div>
        {/* nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">Contact</Link>
          </li>
        </ul>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg:blue-950 transiltion-all duration-200 hover:red flex items-center rounded-md space-x-2 text-white">
            <span>
              <BiCycling className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.3rem] " />
            </span>
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
