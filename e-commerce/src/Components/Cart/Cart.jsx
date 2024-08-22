import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Banner from '../../Pages/Banner';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notificaton, setNotification] = useState("") //notification state

  // Fetch cart items from server on component mount
  useEffect(() => {
    axios.get("http://localhost:9999/cart")
      .then((response) => {
        // Process received data to include quantity
        const updatedCartItems = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCartItems(updatedCartItems);
      })
      .catch((error) => {
        console.log("Product Fetching Error", error);
      });
  }, []);

  // Function to remove an item from the cart
  const handleRemove = (id) => {
    axios.delete(`http://localhost:9999/cart/${id}`)
      .then(() => {
        // Update cart items state by filtering out the removed item
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log("Error Removing The Product!", error);
      });
  };

  // Function to handle quantity change for an item in the cart
  const quantityChange = (id, newQuantity) => {
    // Update quantity of the selected item
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Function to calculate total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.newprice * item.quantity,
      0
    );
  };

  // Function for handling order submission logic
  const orderNow = () => {
    console.log("Order Now Clicked");
  };

  return (
    <>
      <Banner title='Cart' page={'Cart'} />
      <section className="container mx-auto p-5">
        <div>
          {/* Display message if cart is empty */}
          {cartItems.length === 0 ? (
            <p className="text-center text-2xl font-medium md:text-5xl">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-2 border p-4 items-center mb-4 rounded-md shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-48 rounded"
                />
                <div className="flex-grow lg:ml-5 md:ml-3">
                  <p className="font-bold lg:text-2xl text-lg my-1">{item.name}</p>
                  <p className="text-gray-500 max-w-[95%]">{item.title}</p>
                  <p className="text-red-500 text-lg font-semibold my-1.5">Rs. {item.newprice}</p>
                </div>
                {/* Display total price for each item */}
                <p className="ml-auto font-bold text-lg">
                  Rs.{item.newprice * item.quantity}
                </p>
                {/* Dropdown to select quantity */}
                <div className="ml-4">
                  <select
                    value={item.quantity}
                    onChange={(e) => quantityChange(
                      item.id,
                      parseInt(e.target.value)
                    )}
                    className="border rounded px-2 py-1"
                  >
                    {/* Generate options for quantity selection */}
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Button to remove item from cart */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-4 bg-white py-1 px-2 rounded text-black border-2 border-rounded"
                >
                  Remove
                </button>
              </div>
            ))
          )}
          {/* Display total price and order button if cart is not empty */}
          {cartItems.length > 0 && (
            <div className="mt-8">
              <p className="text-xl font-bold md:text-2xl">
                Total: Rs.{calculateTotal()}
              </p>
              <button
                onClick={orderNow}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 font-semibold ubpixel-antialiased tracking-wide transition"
                disabled={cartItems.length === 0}
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </section>
    </>

  );
};

export default ProductPage;
