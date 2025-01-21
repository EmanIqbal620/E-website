import Image from "next/image";

export default function Cart() {
  return (
    <div className="flex flex-col md:flex-row border-2 border-gray-200 shadow-md p-5 gap-5 w-full max-w-7xl mx-auto">
      {/* Left Section (Cart Items) */}
      <div className="flex-[7] flex flex-col gap-4">
        {/* Cart Item 1 */}
        <div className="flex items-center gap-4 p-4 border rounded-md shadow-sm">
          <Image src="/product-3.png" alt="logo" width={150} height={140} />
          <div className="flex flex-col w-full">
            <div className="flex justify-between text-gray-900">
              <p>Library Stool Chair</p>
              <p className="font-bold">MRP: $99</p>
            </div>
            <p className="text-gray-500 mt-2">Ashen Slate/Cobalt Bliss</p>
            <p className="text-gray-500">Quantity: 1</p>
            <div className="flex gap-4 mt-4 text-gray-500">
              <i className="bi bi-heart"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
        </div>

        {/* Cart Item 2 */}
        <div className="flex items-center gap-4 p-4 border rounded-md shadow-sm">
          <Image src="/our-product--2.png" alt="logo" width={150} height={140} />
          <div className="flex flex-col w-full">
            <div className="flex justify-between text-gray-900">
              <p>Library Stool Chair</p>
              <p className="font-bold">MRP: $99</p>
            </div>
            <p className="text-gray-500 mt-2">Ashen Slate/Cobalt Bliss</p>
            <p className="text-gray-500">Quantity: 1</p>
            <div className="flex gap-4 mt-4 text-gray-500">
              <i className="bi bi-heart"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Summary) */}
      <div className="flex-[3] flex flex-col bg-gray-100 p-5 rounded-md shadow-md">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Summary</h4>
        <div className="flex justify-between py-2 border-b">
          <p>Subtotal</p>
          <p className="font-bold">$198.00</p>
        </div>
        <div className="flex justify-between py-2 border-b">
          <p>Estimated Delivery & Handling</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between py-2 font-bold text-lg">
          <p>Total</p>
          <p>$198.00</p>
        </div>
        <button className="mt-6 py-3 bg-teal-500 text-white font-semibold rounded-full text-center hover:bg-teal-600 transition">
          Member Checkout
        </button>
      </div>
    </div>
  );
}
