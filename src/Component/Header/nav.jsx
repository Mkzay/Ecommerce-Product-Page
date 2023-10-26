import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideBar from "./sideBar";
import Cart from "../Body/cart";

export default function Nav() {
  //Function for opening up the Sidebar Menu
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openMenu = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  //Function for opening up the Cart toggle
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header className="flex items-center justify-between fixed top-0 bg-White w-full py-5 px-4 lg:px-14 lg:border-b lg:w-11/12 z-10 lg:pb-0">
      <div className="flex justify-center items-center gap-3 lg:flex lg:flex-row lg:gap-16">
        <button
          onClick={openMenu}
          className="text-xl text-Very-dark-blue lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {isCartVisible && <Cart toggleCart={toggleCart} />}
        <img src="./images/logo.svg" />
        <SideBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <div className="flex gap-5 lg:gap-8">
        <button
          onClick={toggleCart}
          className="text-xl text-Black lg:text-Dark-grayish-blue lg:hover:text-Black"
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="flex items-center justify-center bg-White w-8 h-8 rounded-full hover:border-Orange hover:border-4 lg:w-12 lg:h-12">
          <img
            className="rounded-full w-[1.66rem] h-[1.66rem] lg:w-[2.65rem] lg:h-[2.65rem]"
            src="./images/IMG_2815 Large.jpeg"
          />
        </button>
      </div>
    </header>
  );
}
