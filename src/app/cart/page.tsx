'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Update cart in localStorage and state
  const updateCartInLocalStorage = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase quantity of a specific item
  const handleIncreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartInLocalStorage(updatedCart);
    toast.success("Increased item quantity!");
  };

  // Decrease quantity of a specific item
  const handleDecreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    updateCartInLocalStorage(updatedCart);
    toast.success("Decreased item quantity!");
  };

  // Remove an item from the cart
  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCartInLocalStorage(updatedCart);
    toast.success("Item removed from cart!");
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      <ToastContainer />
      <h1 className="text-3xl font-extrabold text-[#272343] mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div>Your cart is empty!</div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4">
              <div className="w-1/4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-3/4 flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#272343]">{item.title}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded-md"
                  >
                    -
                  </button>
                  <span className="text-xl">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#272343]">Total: ${calculateTotal()}</h2>
          <button
            onClick={() => router.push("/checkout")}
            className="bg-[#2c606b] text-white px-8 py-3 rounded-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
