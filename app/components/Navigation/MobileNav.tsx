import Link from "next/link";
import { ImCross } from "react-icons/im";
interface Props {
  showNav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navStyle} z-[1002] top-0 left-0 right-0 bottom-0 bg-[#000000e0] h-[100vh]
     transition-all duration-100`}
    >
      <ImCross
        onClick={closeNav}
        className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white"
      />
      {/* nav links */}
      <div
        className={`bg-emerald-700 ${navStyle} transition-all duration-200 delay-200 flex flex-col items-center justify-center
           w-[70%] h-[100%]`}
      >
        <ul className="space-y-10">
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[35px] font-medium hover:text-yellow-400 text-white">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
