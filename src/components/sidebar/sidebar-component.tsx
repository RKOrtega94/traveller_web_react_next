import Image from "next/image";
import SidebarAnchor from "./components/sidebar-anchor";

import LogoImage from "@assets/images/logo.png";

// Icons
import HomeIcon from "@assets/icons/home.png";

export default function SidebarComponent() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="main-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-64 min-h-full bg-base-100 text-base-content rounded-r-2xl shadow-md">
        {/* Sidebar content here */}
        <Image src={LogoImage} alt="logo" />
        <div className="divider my-0"></div>
        <SidebarAnchor icon={HomeIcon} label="Inicio" route="/users" />
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
}
