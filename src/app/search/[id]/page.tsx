"use client";  // Mark this component as a Client Component

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'; // Correct hook to fetch query params
import Image from 'next/image';  // Import Image component

interface Product {
  title: string;
  price: number;
  image: { asset: { url: string } };
  category: { title: string };
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams(); // Use searchParams to access query params
  const query = searchParams.get("query"); // Extract query param
  const category = searchParams.get("category"); // Extract category param

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!query || !category) return; // Ensure these are available

        let queryString = `*[_type == "products" && title match "${query}*"]`;

        if (category) {
          queryString += ` && category->title == "${category}"`;
        }

        queryString += `]{
          title, price, image{asset->{url}}, category->{title}
        }`;

        const fetchedProducts = await client.fetch(queryString);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Fallback to empty array
      }
    };

    fetchProducts();
  }, [query, category]);

  return (
    <div className="container mx-auto p-4">
      <h2>Search Results for &quot;{query}&quot;</h2>

      {products.length === 0 ? (
        <div>No products found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <Image
                src={product.image?.asset?.url || "/default-image.jpg"}
                alt={product.title}
                width={500}  // Provide width
                height={200}  // Provide height
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-600 mt-1">{product.category?.title || "Uncategorized"}</p>
              <p className="text-xl font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
