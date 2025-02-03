import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import "bootstrap-icons/font/bootstrap-icons.css";

// Fetch products from the Sanity backend
async function getProducts() {
  const query = `*[_type == "products"][0...8] {
    title,
    price,
    description,
    "id": _id,
    "imageUrl": image.asset->url
  }`;
  return await client.fetch(query);
}

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface WishlistItem {
  id: string;
  title: string;
}

export default function OurProduct() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]); // Define specific type for products

  // Fetch products on load
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    const fetchData = async () => {
      const products = await getProducts();
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

  // Check if product is in wishlist
  const isInWishlist = (id: string) => {
    return wishlist.some(item => item.id === id);
  };

  return (
    <div className="p-6">
      <h1 className="text-[#272343] text-[30px] font-bold items-center text-center mb-6">
        Our Products
      </h1>
      <section className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="sm:w-[250px] sm:h-[330px] bg-white shadow-md p-4 rounded-lg flex-col m-auto transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#f5f7fa]"
          >
            {/* Product Image */}
            <Link href={`/shop/${product.id}`}>
              <Image
                src={product.imageUrl || "/default-product-image.png"}
                alt={product.title}
                width={240}
                height={280}
                className="object-contain rounded-lg transition duration-300 ease-in-out"
              />
            </Link>
            <div className="flex justify-between items-center p-1 text-[#272343] mt-2">
              {/* Product Title & Price */}
              <div className="flex flex-col">
                <p className="text-md font-semibold">{product.title}</p>
                <p className="font-bold text-[#3a3b3c]">${product.price}</p>
              </div>

              {/* Icons: Heart and Cart */}
              <div className="flex space-x-4">
                {/* Heart Icon for Wishlist */}
                <div
                  className={`p-3 rounded-full flex items-center justify-center cursor-pointer ${isInWishlist(product.id) ? "text-red-500" : "text-[#272343]"}`}
                  onClick={() => {
                    if (isInWishlist(product.id)) {
                      removeFromWishlist(product.id);
                    } else {
                      addToWishlist({ id: product.id, title: product.title });
                    }
                  }}
                >
                  <i className={`bi bi-heart${isInWishlist(product.id) ? "-fill" : ""} transition-colors duration-200`} />
                </div>

                {/* Cart Icon */}
                <div className="p-2 rounded-full flex items-center justify-center cursor-pointer">
                  <i className="bi bi-cart text-[#272343] hover:text-[#f0b800] transition-colors duration-200"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
