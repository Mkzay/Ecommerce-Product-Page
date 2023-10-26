/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart({ cartItems, parentComponent }) {
  // Calculate the total price of all items in the cart
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.total,
    0
  );

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    // Update the cartItems state in the parent component using a function passed in as a prop.
    parentComponent(updatedCart);
  };

  return (
    <div className="rounded-xl w-[95%] bg-White absolute top-[4.8rem] left-[0.55rem] shadow-2xl z-40 overflow-auto md:top-18 md:left-[46%] md:w-6/12 md:h-1/3 lg:top-20 lg:h-[42%] lg:w-[28%] lg:left-[66%]">
      <div className="border-b py-6">
        <h3 className="text-Black text-xl font-bold border-Grayish-blue pl-5">
          Cart
        </h3>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center p-16 text-Dark-grayish-blue font-bold">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div>
          {/* Display items in the cart */}
          {cartItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-5 pt-5 lg:p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md"
                />
                <div className="flex flex-col">
                  <div>
                    <p className="text-Dark-grayish-blue font-normal">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-Dark-grayish-blue font-normal">
                      ${item.price} x {item.quantity}
                    </p>
                    <p className="text-Black font-bold">${item.total}</p>
                  </div>
                </div>
                <button onClick={() => removeItemFromCart(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}

          {/* Display the Checkout button */}
          <div className="flex items-center justify-center py-10">
            <button className="bg-Orange rounded-lg p-4 w-11/12 text-White font-bold hover:opacity-70">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
