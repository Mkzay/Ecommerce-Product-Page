import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Text() {
  return (
    <section className="flex flex-col gap-5 p-5 basis-2/5">
      <div className="flex flex-col gap-2 md:gap-5">
        <h2 className="text-Orange font-bold">SNEAKER COMPANY</h2>
        <h1 className="text-Black text-3xl font-bold md:text-4xl md:pr-4">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-Dark-grayish-blue font-normal pr-2">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
      </div>

      <div className="flex flex-col gap-5 pb-10">
        <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
          <p className="text-Black text-2xl font-bold">
            $125.00{" "}
            <span className="text-Orange text-base bg-Light-grayish-blue p-1 rounded relative -top-[2px] -right-3">
              50%
            </span>
          </p>
          <p className="text-Dark-grayish-blue font-bold line-through">
            $250.00
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex justify-between bg-Light-grayish-blue rounded-lg p-4 md:w-4/12">
            <button className="text-Orange text-lg">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <p className="text-Black font-bold">0</p>
            <button className="text-Orange text-lg">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-Orange rounded-lg text-White font-bold flex gap-5 items-center justify-center w-full p-4 shadow-2xl shadow-Orange md:px-20">
              <FontAwesomeIcon icon={faCartShopping} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
