'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import "bootstrap-icons/font/bootstrap-icons.css";

// Define product type
interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string;
  description: string;
  inventory: number;
  tags: string[];
}

// Wishlist and Cart item type definition
interface WishlistItem {
  id: string;
  title: string;
}

async function getData(): Promise<Product[]> {
  const query = `*[_type == "products" && "featured" in tags] | order(title) [0...4] {
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    description,
    inventory,
    tags
  }`;
  return client.fetch(query);
}

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [cart, setCart] = useState<WishlistItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products on load
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    const storedCart = localStorage.getItem('cart');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    
    const fetchData = async () => {
      const products = await getData();
      setProducts(products);
    };
    
    fetchData();
  }, []);

  // Add product to wishlist
  const addToWishlist = (product: WishlistItem) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Remove product from wishlist
  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Add product to cart
  const addToCart = (product: WishlistItem) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove product from cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Check if product is in wishlist
  const isInWishlist = (id: string) => {
    return wishlist.some(item => item.id === id);
  };

  // Check if product is in cart
  const isInCart = (id: string) => {
    return cart.some(item => item.id === id);
  };

  return (
    <div className="px-6 py-8 bg-[#f9fafb]">
      <h1 className="text-3xl font-bold text-[#272343] mb-8 text-center">
        Featured Products
      </h1>

      {/* Products Section */}
      <section className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="sm:w-[250px] sm:h-[380px] bg-white shadow-md p-4 rounded-lg flex flex-col m-auto transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#f5f7fa]"
          >
            {/* Product Image with Badge */}
            <div className="relative w-full h-[280px] mb-4">
              {/* Sales Badge */}
              {product.badge === "Sale" && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sale
                </div>
              )}

              {/* New Badge */}
              {product.badge === "New" && (
                <div className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              )}

              {/* Product Image */}
              <Link href={`/shop/${product._id}`}>
                <Image
                  src={product.imageUrl || "/default-product-image.png"}
                  alt={product.title}
                  width={240}
                  height={280}
                  className="object-contain rounded-lg transition duration-300 ease-in-out"
                />
              </Link>
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-center p-1 text-[#272343] mt-2 w-full">
              {/* Product Title & Price */}
              <div className="w-3/4">
                <p className="text-md font-semibold truncate">{product.title}</p>
                <p className="font-bold text-[#3a3b3c]">${product.price}</p>
              </div>

              {/* Heart Icon for Wishlist */}
              <div
                className={`p-3 rounded-full flex items-center justify-center cursor-pointer ${isInWishlist(product._id) ? "text-red-500" : "text-[#272343]"}`}
                onClick={() => {
                  if (isInWishlist(product._id)) {
                    removeFromWishlist(product._id);
                  } else {
                    addToWishlist({ id: product._id, title: product.title });
                  }
                }}
              >
                <i className={`bi bi-heart${isInWishlist(product._id) ? "-fill" : ""} transition-colors duration-200`} />
              </div>

              {/* Cart Icon */}
              <div
                className={`p-3 rounded-full flex items-center justify-center cursor-pointer ${isInCart(product._id) ? "text-yellow-500" : "text-[#272343]"}`}
                onClick={() => {
                  if (isInCart(product._id)) {
                    removeFromCart(product._id);
                  } else {
                    addToCart({ id: product._id, title: product.title });
                  }
                }}
              >
                <i className={`bi bi-cart${isInCart(product._id) ? "-fill" : ""} transition-colors duration-200`} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
