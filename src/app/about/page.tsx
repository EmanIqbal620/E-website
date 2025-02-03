import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex mt-5 flex-wrap lg:flex-nowrap justify-between items-center lg:mx-20 sm:mx-10 mx-3 mb-8 lg:mb-16 gap-5">
        {/* Left Section */}
        <div className="flex-1 bg-[#007580]  p-5 lg:p-10 text-white">
          <h3 className="text-lg lg:text-2xl font-bold mb-4">
            About Us - Comforty
          </h3>
          <p className="text-sm lg:text-base mb-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="bg-[#0e909c] text-white px-6 py-2 rounded-lg hover:bg-[#0b7680]">
            View Collection
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1  bg-gray-100 h-[250px] lg:h-[300px] relative overflow-hidden">
        <Image
  src="/product-image.png"
  alt="logo"
  width={500}
  height={300}
  className="object-cover"
/>
        </div>
      </div>
 


      <div>
        <h2 className="font-bold text-[25px] items-center text-center mb-5">
          What makes our Brand Different
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 md:gap-5 xl:gap-8">

          <div className="w-[150px] sm:w-[300px] md:[300px] lg:w[350px] xl-w[400px] py-5 sm:px-5 bg-[#F9F9F9] text-[#007580]">
            <Image
              src="/Delivery.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <div className="">
              <h3 className="mb-4 text-[16px] font-bold">Next day as standard</h3>
              <p>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="w-[150px] sm:w-[300px] md:[300px] lg:w[350px] xl-w[400px] py-5 sm:px-5 bg-[#F9F9F9] text-[#007580]">
            <Image
              src="/Checkmark--outline.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <div >
              <h3 className="mb-4 text-[16px] font-bold">Made by true artisans</h3>
              <p>
              Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[150px] sm:w-[300px] md:[300px] lg:w[350px] xl-w[400px] py-5 sm:px-5 bg-[#F9F9F9] text-[#007580]">
            <Image
              src="/Purchase.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <div >
              <h3 className="mb-4 text-[16px] font-bold">Unbeatable prices</h3>
              <p>
              For our materials and quality you won’t find better prices anywhere
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-[150px] sm:w-[300px] md:[300px] lg:w[350px] xl-w[400px] py-5 sm:px-5 bg-[#F9F9F9] text-[#007580] ">
            <Image
              src="/Sprout.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <div>
              <h3 className=" mb-2 text-[16px] font-bold">Recycled packaging</h3>
              <p>
              We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about page third section */}
    <h3 className="font-bold text-[30px]">Our Popular Products </h3>
    
    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-6 mx-3 lg:mx-10 my-8">
      {/* First Image */}
      <div className="flex flex-col w-[50%] lg:w-[40%]">
        <Image
          src="/Large.png" // Replace with your image URL
          alt="Image 1"
          height={200}
          width={200}
          className="h-[200px] lg:h-[300px] w-full object-cover rounded-lg"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">The Poplar suede sofa</h3>
          <p className="text-sm text-gray-600">$99.00</p>
        </div>
      </div>

      {/* Second Image */}
      <div className="flex flex-col w-[25%] lg:w-[30%]">
        <Image
          src="/Parent (1).png" // Replace with your image URL
          alt="Image 2"
          width={200}
          height={200}
          className="h-[200px] lg:h-[300px] w-full object-cover rounded-lg"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">The Dandy chair</h3>
          <p className="text-sm text-gray-600">$99.00</p>
        </div>
      </div>

      {/* Third Image */}
      <div className="flex flex-col w-[25%] lg:w-[30%]">
        <Image
          src="/Parent.png" // Replace with your image URL
          alt="Image 3"
          className="h-[200px] lg:h-[300px] w-full object-cover rounded-lg"
          height={200}
          width={200}
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">The Dandy chair</h3>
          <p className="text-sm text-gray-600">$99.00</p>
        </div>
      </div>
    </div>
  
    </>
  );
}
