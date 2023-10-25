/* eslint-disable react/prop-types */
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

  const images = [
    "./images/thumbnail/image-product-1-thumbnail.jpg",
    "./images/thumbnail/image-product-2-thumbnail.jpg",
    "./images/thumbnail/image-product-3-thumbnail.jpg",
    "./images/thumbnail/image-product-4-thumbnail.jpg",
  ];

  // Function to change the main image to the clicked thumbnail
  const changeMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Darkened overlay */}
      {isSliderVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40"></div>
      )}

      <div
        className={`flex flex-col gap-4 fixed top-14 right-[27rem] z-50 ${
          isSliderVisible ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end">
          <button
            onClick={closeImageSlider}
            className="font-bold text-White text-2xl hover:text-Orange"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div>
          <button
            onClick={previousImage}
            className="absolute left-4 w-12 h-12 rounded-full block text-Black bg-White hover-text-Orange top-1/2 transform -translate-y-3/4"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            className="md:rounded-xl md:h-[800px] lg:h-[410px] mx-auto"
            src={imageS[currentImageIndex]}
          />
          <button
            onClick={nextImage}
            className="absolute right-4 w-12 h-12 rounded-full block text-Black bg-White hover-text-Orange top-1/2 transform -translate-y-3/4"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="items-center justify-center gap-7 flex">
          {images.map((image, index) => (
            <img
              key={index}
              className="rounded-xl w-[100px] h-full hover:border-Orange hover:border-4 hover:opacity-70 cursor-pointer"
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => changeMainImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
