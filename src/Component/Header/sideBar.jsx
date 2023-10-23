/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SideBar(props) {
  return (
    <aside
      className={`${
        props.isOpen ? "fixed" : "hidden"
      } w-9/12 h-full bg-White flex flex-col items-start justify-top gap-8 top-0 left-0 pt-6 pl-6 shadow-2xl drop-shadow-2xl md:block md:relative md:-top-2 md:w-auto md:shadow-none md:drop-shadow-none`}
    >
      <button
        onClick={props.onClose}
        className="text-xl text-Very-dark-blue md:hidden"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <ul className="text-xl text-Black font-bold flex flex-col gap-7 cursor-pointer md:flex-row md:gap-10 md:text-lg md:font-normal md:text-Dark-grayish-blue">
        <li className="hover:text-Orange md:hover:text-Black md:hover:border-b-4 md:border-Orange">
          Collections
        </li>
        <li className="hover:text-Orange md:hover:text-Black md:hover:border-b-4 md:border-Orange">
          Men
        </li>
        <li className="hover:text-Orange md:hover:text-Black md:hover:border-b-4 md:border-Orange">
          Women
        </li>
        <li className="hover:text-Orange md:hover:text-Black md:hover:border-b-4 md:border-Orange">
          About
        </li>
        <li className="hover:text-Orange md:hover:text-Black md:hover:border-b-4 md:border-Orange">
          Contact
        </li>
      </ul>
    </aside>
  );
}
