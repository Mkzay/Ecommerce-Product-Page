import { useState } from "react";
import Hero from "./hero-section";
import Text from "./text-section";
import Cart from "./cart";

export default function Body() {
  const images = [
    "./images/thumbnail/image-product-1-thumbnail.jpg",
    "./images/thumbnail/image-product-2-thumbnail.jpg",
    "./images/thumbnail/image-product-3-thumbnail.jpg",
    "./images/thumbnail/image-product-4-thumbnail.jpg",
  ];

  // Manage cart state
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Update the cart items state
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    // Update the cart items state
    setCartItems(updatedCart);
  };

  return (
    <div className="flex items-center justify-center flex-col pt-8 md:pt-20 lg:gap-10 lg:flex-row lg:pt-40 lg:pb-8">
      <Hero images={images} />
      <Text addToCart={addToCart} />
      <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />
    </div>
  );
}


/*import Hero from "./hero-section";
import Text from "./text-section";
import Cart from "./cart";
import { useState } from "react";

export default function Body() {
  const images = [
    "./images/thumbnail/image-product-1-thumbnail.jpg",
    "./images/thumbnail/image-product-2-thumbnail.jpg",
    "./images/thumbnail/image-product-3-thumbnail.jpg",
    "./images/thumbnail/image-product-4-thumbnail.jpg",
  ];

  // Manage cart state
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (itemIndex !== -1) {
      // If item exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      // If item doesn't exist, add it to the cart
      setCartItems([...cartItems, { ...item }]);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col pt-8 md:pt-20 lg:gap-10 lg:flex-row lg:pt-40 lg:pb-8">
      <Hero images={images} />
      <Text addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}*/
