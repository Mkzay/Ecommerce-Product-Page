/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Slider from "./image";

export default function Hero({ images }) {
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

  //Function for opening up the Image Slider
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  const toggleSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center basis-2/5 gap-7 lg:pb-10">
      <div className="relative">
        <button
          onClick={previousImage}
          className="absolute bottom-36 left-1 w-12 h-12 rounded-full block text-Black bg-White hover:text-Orange md:bottom-80 lg:hidden"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          className="md:rounded-xl md:h-[800px] lg:h-[500px] lg:hidden"
          src={imageS[currentImageIndex]}
        />
        <button className="hidden lg:block">
          {isSliderVisible && <Slider toggleSlider={toggleSlider} />}
          <img
            className="lg:rounded-xl lg:h-[500px]"
            src={imageS[currentImageIndex]}
          />
        </button>
        <button
          onClick={nextImage}
          className="absolute bottom-36 right-1 w-12 h-12 rounded-full block text-Black bg-White hover:text-Orange md:bottom-80 lg:hidden"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="items-center justify-center gap-7 hidden lg:flex">
        {images.map((image, index) => (
          <img
            key={index}
            className="rounded-xl w-[100px] h-full hover:border-Orange hover:border-4 hover:opacity-70"
            src={image}
            alt={`Thumbnail ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
