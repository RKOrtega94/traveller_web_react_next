"use client";

import { usePathname } from "next/navigation";
import LogoIcon from "@assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import UserOptions from "./user-options";
import BurgerMenu from "@assets/icons/menu.svg";

export default function AppBar() {
  const pathname = usePathname();
  return (
    <div
      className={`w-full p-4  z-40 ${pathname !== "/" ? "bg-white" : "fixed"}`}
    >
      <div className="w-full flex justify-between">
        <div className="flex space-x-2">
          <button className="md:hidden rounded-full bg-white flex items-center justify-center p-1">
            <Image src={BurgerMenu} alt="menu" width={25} height={25} />
          </button>
          <Link className="hidden md:block" href="/">
            <Image src={LogoIcon} alt="logo" width={40} height={40} />
          </Link>
        </div>
        <UserOptions />
      </div>
    </div>
  );
}
