import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/images/logo-crop.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const router = useRouter();

  return (
    <div className="top-0 left-0 fixed z-50 flex flex-row justify-between items-center w-full py-12 px-28 h-10 bg-yellow-300">
      <Image src={logo} width={160} height={70} alt="logo" />

      <div>
        <ul className="flex flex-row space-x-10">
          <Link href="/">
            <li className={router.pathname === "/" ? "nav-btn-active" : "nav-btn"}>Home</li>
          </Link>
          <Link href="/about">
            <li className={router.pathname === "/about" ? "nav-btn-active" : "nav-btn"}>About us</li>
          </Link>
          <Link href="/nutrition">
            <li className={router.pathname === "/nutrition" ? "nav-btn-active" : "nav-btn"}>Nutrition & Facts</li>
          </Link>

          <Link href="/order-now">
            <div className="flex flex-row items-center space-x-2">
              <li className={router.pathname === "/order-now" ? "nav-btn-active" : "nav-btn"}>Order now</li>
              <AiOutlineShoppingCart size={25} className="text-orange-500" />
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
