import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideBar from "./sideBar";

export default function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  //Function for opening up the Sidebar Menu
  const openMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center justify-between w-full py-5 px-4 md:px-14 md:border-b md:w-11/12">
      <div className="flex justify-center items-center gap-3 md:flex md:flex-row md:gap-16">
        <button
          onClick={openMenu}
          className="text-xl text-Very-dark-blue md:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <img src="./images/logo.svg" />
        <SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <div className="flex gap-5 md:gap-8">
        <button className="text-xl text-Black md:text-Dark-grayish-blue md:hover:text-Black">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="bg-red-700 w-7 h-7 rounded-full">
          <img
            className="rounded-full w-8 h-8"
            src="./images/IMG_2815 Large.jpeg"
          />
        </button>
      </div>
    </header>
  );
}
