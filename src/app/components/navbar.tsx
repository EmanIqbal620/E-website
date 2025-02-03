'use client'
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from 'react';

export default function Nav() {
  const [, setWishlistCount] = useState(0);

  useEffect(() => {
    const storedWishlistCount = JSON.parse(localStorage.getItem('wishlistCount') || '0');
    setWishlistCount(storedWishlistCount);
  }, []);

  return (
    <>
      <nav>
        <div className="w-full h-[35px] bg-[#272343] text-[#FFFFFF] font-extralight flex-col sm:flex-row flex items-center justify-between px-4 text-sm">
          <p>✓ Free shipping on all orders over $50</p>
          <div className="list-none flex gap-6">
            <li>ENG</li>
            <li>Faqs</li>
            <li>Need Help</li>
          </div>
        </div>

        {/* nav2 */}
        <div className="flex justify-between px-4 bg-[#F0F2F3] py-3 flex-col sm:flex-row">
          <div>
            <Image src={"/logo (8).png"} alt="" width={166} height={40}></Image>
          </div>

          <Link href="/cart">
            <div className="flex py-1 gap-4 bg-white px-3 justify-between items-center rounded-lg shadow-sm">
              {/* Cart Section */}
              <div className="flex bg-gray-100 p-1 rounded-lg items-center relative">
                {/* Cart Icon and Text */}
                <i className="bi bi-cart text-lg text-gray-700"></i>
                <p>Cart </p>
              </div>
            </div>
          </Link>
        </div>

        {/* nav3 */}
        <div className="w-full h-auto sm:h-[54px] bg-[#FFFFFF] text-[#636270] shadow-[0_0_4px_rgba(0,0,0,0.2)] flex justify-between items-center p-4 flex-col sm:flex-row">
          <div className="flex list-none gap-[15px] flex-col sm:flex-row">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/shop/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/pages"}>Pages</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </div>

          <div className="flex justify-end items-center p-4">
            {/* Signed In State */}
            <SignedIn>
              <div className="flex items-center gap-4">
                <UserButton />
                <span className="text-sm text-gray-800 font-semibold">Welcome back!</span>
              </div>
            </SignedIn>

            {/* Signed Out State */}
            <SignedOut>
              <div className="flex items-center">
                <SignInButton>
                  <button className="bg-[#007580] text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </nav>
    </>
  );
}
