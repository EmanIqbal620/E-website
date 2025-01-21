import Image from "next/image";


export default function Footer() {
  return (
    <div className="bg-white w-full mt-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* First Column */}
      <div className="flex flex-col items-start px-6">
        <div>
          <Image src="/Logo (8).png" width={168} height={40} alt="Logo" />
        </div>
        <p className="text-gray-500 mt-4 leading-6">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis
          interdum. Cras egestas purus.
        </p>
        <div className="flex gap-4 mt-4 text-xl text-gray-700">
          <i className="bi bi-facebook cursor-pointer hover:text-blue-500"></i>
          <i className="bi bi-twitter cursor-pointer hover:text-blue-400"></i>
          <i className="bi bi-instagram cursor-pointer hover:text-pink-500"></i>
          <i className="bi bi-pinterest cursor-pointer hover:text-red-500"></i>
          <i className="bi bi-youtube cursor-pointer hover:text-red-600"></i>
        </div>
      </div>

      {/* Second Column */}
      <div className="px-6">
        <h4 className="text-gray-500 font-semibold mb-4">Category</h4>
        <ul className="space-y-2 text-gray-700">
          <li>Sofa</li>
          <li>Armchair</li>
          <li>Wing Chair</li>
          <li>Desk Chair</li>
          <li>Wooden Chair</li>
          <li>Park Bench</li>
        </ul>
      </div>

      {/* Third Column */}
      <div className="px-6">
        <h4 className="text-gray-500 font-semibold mb-4">Support</h4>
        <ul className="space-y-2 text-gray-700">
          <li>Help & Support</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Help</li>
        </ul>
      </div>

      {/* Fourth Column */}
      <div className="px-6">
        <h4 className="text-gray-500 font-semibold mb-4">Newsletter</h4>
        <div className="flex items-center w-full max-w-sm">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-[#029FAE] text-white rounded-r-md hover:bg-[#36d2e0]">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim.
        </p>
      </div>
    </div>
  );
}
