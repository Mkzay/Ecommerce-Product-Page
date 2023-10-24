import Hero from "./hero-section";
import Text from "./text-section";
import Cart from "../cart";
import { useState } from "react";

export default function Body() {
  const images = [
    "./images/thumbnail/image-product-1-thumbnail.jpg",
    "./images/thumbnail/image-product-2-thumbnail.jpg",
    "./images/thumbnail/image-product-3-thumbnail.jpg",
    "./images/thumbnail/image-product-4-thumbnail.jpg",
  ];

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
    <div className="flex items-center justify-center flex-col pt-8 lg:gap-10 lg:flex-row lg:pt-40 lg:pb-8">
      <Hero images={images} />
      <Text showCart={showCart} handleShowCart={handleShowCart} />
    </div>
  );
}
