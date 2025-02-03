'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons
import Pagination from "../components/pagination";

// Define types for products and categories
interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string | null;
  image: { asset: { url: string } };
  category: { _id: string; title: string };
  description: string;
  inventory: number;
  tags: string[];
}

// Fetch products from the database
async function getData(): Promise<Product[]> {
  const query = `*[_type == "products"] | order(_createdAt desc) {
    _id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    image { asset-> { url } },
    category-> { _id, title },
    description,
    inventory,
    tags
  }`;
  return client.fetch(query);
}

export default function LatestProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [tagsFilter, setTagsFilter] = useState<string[]>([]);
  const [inventoryFilter, setInventoryFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page
  const itemsPerPage = 8; // Number of items per page

  // Fetch the products when the component is mounted
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getData();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  // Apply all filters to products
  useEffect(() => {
    const filtered = products.filter(product => {
      // Search filter
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = categoryFilter ? product.category?.title === categoryFilter : true;

      // Price filter
      const matchesPrice =
        priceFilter === "all" ? true :
        priceFilter === "0-50" ? product.price >= 0 && product.price <= 50 :
        priceFilter === "50-100" ? product.price > 50 && product.price <= 100 :
        priceFilter === "100+" ? product.price > 100 : true;

      // Tags filter
      const matchesTags = tagsFilter.length > 0 ? tagsFilter.some(tag => product.tags?.includes(tag)) : true;

      // Inventory filter
      const matchesInventory = inventoryFilter === "all" ? true :
                               inventoryFilter === "inStock" ? product.inventory > 0 :
                               inventoryFilter === "outOfStock" ? product.inventory === 0 : true;

      // Combine all filters
      return matchesSearch && matchesCategory && matchesPrice && matchesTags && matchesInventory;
    });

    setFilteredProducts(filtered);
  }, [searchQuery, categoryFilter, priceFilter, tagsFilter, inventoryFilter, products]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle search query change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (category: string) => setCategoryFilter(category);

  // Handle price filter change
  const handlePriceChange = (price: string) => setPriceFilter(price);

  // Handle tags filter change
  const handleTagsChange = (tag: string) => {
    if (tagsFilter.includes(tag)) {
      setTagsFilter(tagsFilter.filter(t => t !== tag)); // Remove tag if already selected
    } else {
      setTagsFilter([...tagsFilter, tag]); // Add tag if not selected
    }
  };

  // Handle inventory filter change
  const handleInventoryChange = (status: string) => setInventoryFilter(status);

  return (
    <div className="px-6 py-8 bg-[#f9fafb]">
      <h1 className="text-3xl font-bold text-[#272343] mb-8 text-center">
        Latest Products
      </h1>

      {/* Search Bar */}
      <div className="mb-6 text-center relative">
        <div className="relative w-1/2 sm:w-1/3 mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Chair"
            className="p-2 pl-10 border border-gray-300 rounded-lg w-full"
          />
          <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex justify-center mb-6 space-x-6">
        {/* Category Filter */}
        <div>
          <h3 className="font-semibold">Category</h3>
          <select
            value={categoryFilter}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="">All Categories</option>
            <option value="Furniture">Furniture</option>
            <option value="Chair">Chair</option>
            <option value="New">New</option>
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold">Price Range</h3>
          <select
            value={priceFilter}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="all">All Prices</option>
            <option value="0-50">0 - 50</option>
            <option value="50-100">50 - 100</option>
            <option value="100+">100+</option>
          </select>
        </div>

        {/* Tags Filter */}
        <div>
          <h3 className="font-semibold">Tags</h3>
          <div className="flex flex-wrap space-x-2">
            {['Sale', 'New', 'Featured'].map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagsChange(tag)}
                className={`border p-2 rounded-lg ${tagsFilter.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Inventory Filter */}
        <div>
          <h3 className="font-semibold">Inventory</h3>
          <select
            value={inventoryFilter}
            onChange={(e) => handleInventoryChange(e.target.value)}
            className="border border-gray-300 rounded-lg p-2"
          >
            <option value="all">All</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image with Badge */}
              <div className="relative w-full h-[350px] mb-4 flex justify-center items-center">
                {product.badge && (
                  <div
                    className={`absolute top-7 sm:top-6 left-2 sm:left-12 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${product.badge === "Sale" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
                    style={{
                      zIndex: 10, // Ensure the badge is above the image
                    }}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Product Image */}
                <Link href={`/shop/${product._id}`}>
                  <Image
                    src={product.image?.asset?.url || "/default-product-image.png"}
                    alt={product.title}
                    width={300}
                    height={350}
                    className="object-contain rounded-lg transition-transform duration-300 hover:scale-110 w-full"
                  />
                </Link>
              </div>

              {/* Product Details */}
              <div className="flex justify-between p-1 text-[#272343] mt-2 w-full">
                <div>
                  <p className="text-md font-semibold">{product.title}</p>
                  <p className="font-bold text-[#3a3b3c]">${product.price}</p>
                  {product.category && (
                    <p className="text-sm text-gray-500">
                      Category: {product.category.title}
                    </p>
                  )}
                </div>

                {/* Cart Icon */}
                <div className="p-2 bg-[#F0F2F3] rounded-full flex items-center justify-center">
                  <i className="bi bi-cart text-[#272343] hover:text-[#f0b800] transition-colors duration-200 text-lg"></i>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">No products found</div>
        )}
      </section>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
