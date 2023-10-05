import NavbarComponent from "@components/navbar-component";
import SidebarComponent from "@/components/sidebar/sidebar-component";

export const metadata = {
  title: "Travellers",
};

export default function layout({ children }: { children: React.ReactNode }) {
  /* return (
    <div className="w-full h-screen dark:bg-gray-900 bg-gray-200">
      {children}
    </div>
  ); */
  return (
    <div className="drawer lg:drawer-open">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start p-2">
        {/* Page content here */}
        {/* <label
          htmlFor="main-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        {/* {children} */}
        <NavbarComponent />
      </div>
      <SidebarComponent />
    </div>
  );
}
