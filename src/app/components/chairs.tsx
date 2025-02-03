'use client';
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

interface Product {
  _id: string;
  title: string;
  imageUrl: string | null;
}

async function getData(): Promise<Product[]> {
  return await client.fetch(`*[_type == "products" && "gallery" in tags] {
      _id,
      title,
      "imageUrl": image.asset->url
    } | order(
      title == "Citrus Edge",
      title == "Ivory Charm",
      title == "Library Stool",
      title == "Chair Gray Elegance",
      title == "Scandi Dip Set"
    )[0..4]`);
}

export default function Chairs() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-3">
      {/* Loading Spinner */}
      {loading && (
        <div className="w-full h-64 flex justify-center items-center">
          <p className="text-lg text-gray-600">Loading products...</p>
        </div>
      )}

      {/* Large Image */}
      {data.length > 0 && !loading && (
        <div>
          <Image
            src={data[0]?.imageUrl || "/placeholder.png"}
            alt={data[0]?.title || "Placeholder"}
            width={600}
            height={800}
            className="object-contain w-full"
          />
        </div>
      )}

      {/* Smaller Images */}
      <div className="grid grid-cols-2 gap-6">
        {data.slice(1, 5).map((product) => (
          <div key={product._id} className="rounded-lg">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={400}
                className="object-contain w-full"
              />
            ) : (
              <p className="text-center text-gray-600">No Image Available</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
