import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Slider() {
  const imageS = [
    "./images/display/image-product-1.jpg",
    "./images/display/image-product-2.jpg",
    "./images/display/image-product-3.jpg",
    "./images/display/image-product-4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % imageS.length;
    setCurrentImageIndex(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      (currentImageIndex - 1 + imageS.length) % imageS.length;
    setCurrentImageIndex(previousIndex);
  };

  const closeImageSlider = () => {
    setIsSliderVisible(false);
  };

  const [isSliderVisible, setIsSliderVisible] = useState(true);

  return (
    <div
      className={`flex flex-col gap-4 fixed top-16 right-[27rem] z-10 ${
        isSliderVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end">
        <button
          onClick={closeImageSlider}
          className="font-bold text-Black text-2xl"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div>
        <button
          onClick={previousImage}
          className="absolute left-0 w-12 h-12 rounded-full block text-Black bg-White hover:text-Orange top-1/2 transform -translate-y-1/2"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          className="md:rounded-xl md:h-[800px] lg:h-[500px] mx-auto"
          src={imageS[currentImageIndex]}
        />
        <button
          onClick={nextImage}
          className="absolute right-0 w-12 h-12 rounded-full block text-Black bg-White hover:text-Orange top-1/2 transform -translate-y-1/2"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
