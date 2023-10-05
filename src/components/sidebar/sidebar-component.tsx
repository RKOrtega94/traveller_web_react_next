import Image from "next/image";
import SidebarAnchor from "./components/sidebar-anchor";
import SidebarParentMenu from "./components/sidebar-parent-menu";

import LogoImage from "@assets/images/logo.png";

// Icons
import HomeIcon from "@assets/icons/home.png";
import AdministrationIcon from "@assets/icons/administration.png";

export default function SidebarComponent() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="main-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-64 min-h-full bg-base-100 text-base-content">
        {/* Sidebar content here */}
        <Image src={LogoImage} alt="logo" />
        <div className="divider my-0"></div>
        <SidebarAnchor icon={HomeIcon} label="Inicio" route="/users" />
        <SidebarParentMenu icon={AdministrationIcon} label="Administración">
          <SidebarAnchor icon={HomeIcon} label="Inicio" route="/users" />
        </SidebarParentMenu>
      </ul>
    </div>
  );
}
