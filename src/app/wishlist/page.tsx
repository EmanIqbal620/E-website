'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the type for the WishlistItem
interface WishlistItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]); // Set the type for wishlistItems state

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlistItems(storedWishlist);
  }, []);

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      <h1 className="text-3xl font-extrabold text-[#272343] mb-6">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <div className="w-full h-[200px] relative rounded-md overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-[#272343] mt-4">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-2xl font-bold text-[#2c606b]">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
