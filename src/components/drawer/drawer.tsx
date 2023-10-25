"use client";

import LogoImage from "@assets/images/logo.png";
import CloseIcon from "@assets/icons/close.svg";
import Image from "next/image";
import DrawerButton from "./drawer-button";

export default function AppDrawer() {
  return (
    <div className="z-50 w-52 h-screen fixed flex space-x-2">
      <div className="bg-white h-full w-full rounded-r-lg shadow-md p-4 space-y-2">
        <div className="w-full flex justify-center">
          <Image src={LogoImage} alt="logo" width={100} height={100} />
        </div>
        <DrawerButton />
        <DrawerButton />
        <DrawerButton />
        <DrawerButton />
        <DrawerButton />
      </div>
      <div className="my-2">
        <button className="bg-white rounded-full p-1 shadow-md">
          <Image src={CloseIcon} alt="close" width={25} height={25} />
        </button>
      </div>
    </div>
  );
}
