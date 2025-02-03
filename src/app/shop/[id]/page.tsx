'use client';

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define a type for the cart item
interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
  rating: number;
  quantity: number;
}

interface ProductProps {
  params: {
    id: string;
  };
}

interface Product {
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
  rating: number;
}

export default function ProductDetail({ params }: ProductProps) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async (id: string) => {
      const query = `*[_type == "products" && _id == $id][0] {
        title,
        price,
        "imageUrl": image.asset->url,
        description,
        "category": category->title,
        rating
      }`;

      const productData = await client.fetch(query, { id });
      if (!productData) {
        notFound();
      } else {
        setProduct(productData);
      }
    };

    getProduct(params.id);
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item) => item.id === params.id);

    if (existingProductIndex === -1) {
      cart.push({ ...product, quantity: 1, id: params.id });
    } else {
      cart[existingProductIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Display success toast with position as string
    toast.success(`"${product.title}" added to cart successfully!`, {
      position: 'top-right', // Correct position string
      autoClose: 3000,
    });

    updateCartCount();
  };

  const updateCartCount = () => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartCount = cart.reduce((acc: number, item) => acc + item.quantity, 0);
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  };

  useEffect(() => {
    updateCartCount();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      <ToastContainer /> {/* Ensures Toast Notifications Render */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 h-[400px] relative rounded-md shadow-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-extrabold text-[#272343]">{product.title}</h1>
          <h2 className="text-xl font-semibold text-[#272343]">Description</h2>
          <p className="text-sm text-gray-600">{product.description}</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#272343] font-semibold">Category:</span>
              <span className="text-gray-600">{product.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#272343] font-semibold">Price:</span>
              <span className="text-2xl font-bold text-[#2c606b]">${product.price}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#2c606b] text-white px-6 py-3 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
