import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/images/logo-crop.png";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = (props) => {
  const router = useRouter();

  return (
    <div className="fixed z-50 flex flex-row justify-between items-center w-full py-14 px-28 h-20 bg-yellow-300">
      <Image src={logo} width={180} height={90} alt="logo" />
      <div>
        <ul className="flex flex-row space-x-10">
          <Link href="/">
            <li className={router.pathname === "/" ? "nav-btn-active" : "nav-btn"}>Home</li>
          </Link>

          <li className="nav-btn">Children Juice</li>

          <li className="nav-btn">Order Now</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
