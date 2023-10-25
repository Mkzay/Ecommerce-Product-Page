/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SideBar(props) {
  return (
    <aside
      className={`${
        props.isOpen ? "fixed" : "hidden"
      } w-9/12 h-full bg-White flex flex-col items-start justify-top gap-8 top-0 left-0 pt-6 pl-6 shadow-2xl drop-shadow-2xl z-10 md:w-6/12 md:gap-20 lg:block lg:relative lg:w-auto lg:shadow-none lg:drop-shadow-none`}
    >
      <button
        onClick={props.onClose}
        className="text-xl text-Very-dark-blue md:text-2xl lg:hidden"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <ul className="text-xl text-Black font-bold flex flex-col gap-7 cursor-pointer md:text-2xl lg:flex-row lg:gap-10 lg:text-lg lg:font-normal lg:text-Dark-grayish-blue">
        <li className="hover:text-Orange lg:hover:text-Black lg:hover:border-b-4 lg:border-Orange lg:pb-5">
          Collections
        </li>
        <li className="hover:text-Orange lg:hover:text-Black lg:hover:border-b-4 lg:border-Orange lg:pb-5">
          Men
        </li>
        <li className="hover:text-Orange lg:hover:text-Black lg:hover:border-b-4 lg:border-Orange lg:pb-5">
          Women
        </li>
        <li className="hover:text-Orange lg:hover:text-Black lg:hover:border-b-4 lg:border-Orange lg:pb-5">
          About
        </li>
        <li className="hover:text-Orange lg:hover:text-Black lg:hover:border-b-4 lg:border-Orange lg:pb-5">
          Contact
        </li>
      </ul>
    </aside>
  );
}
