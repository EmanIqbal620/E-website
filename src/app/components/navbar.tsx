import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Nav() {
  return (
    <>
      <nav>
        <div className="w-full h-[35px]  bg-[#272343] text-[#FFFFFF] font-extralight flex-col sm:flex-row flex items-center justify-between px-4 text-sm ">
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
{/*  */}
<Link href="/cart">

          <div className="flex py-1 gap-2 bg-[#FFFFFF] px-4 justify-center items-center rounded-lg shadow-sm">
  <div className="relative flex items-center">
    {/* Cart Text */}
    <p className="ml-2 text-sm text-gray-700">Cart</p>

    {/* Cart Icon */}
    <i className="bi bi-cart text-xl ml-2"></i>

    {/* Quantity Badge */}
    <p className="absolute -top-2 -right-2 rounded-full bg-black text-white text-xs w-4 h-4 flex items-center justify-center">
      2
    </p>
  </div>
</div>
</Link>

        </div>
        {/* nav3 */}
        <div className="w-full h-auto sm:h-[54px]  bg-[#FFFFFF] text-[#636270] shadow-[0_0_4px_rgba(0,0,0,0.2)] flex justify-between items-center p-4 flex-col sm:flex-row  ">
          <div className="flex list-none gap-[15px] flex-col sm:flex-row  ">
            <li className="text-[#007580]">
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/product"}>Product</Link>
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
          <div>
            <p>Contact: (808) 555-0111</p>
          </div>
        </div>
      </nav>
    </>
  );
}
