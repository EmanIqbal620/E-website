
import Image from "next/image";

export default function Shop() {
  return (
    <>
      <div className="flex flex-col sm:flex-row p-8">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full sm:w-1/2">
          <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
            <Image
              className="object-contain"
              src="/product.png"
              alt="Library Stool Chair"
              layout="fill" // Use layout fill for dynamic scaling
              sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
              priority
            />
          </div>
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col justify-center items-start w-full sm:w-1/2 text-[#272343] text-[30px] md:text-[40px] lg:text-[50px] font-bold p-6 sm:p-8 lg:p-9">
          <div className="pb-5 lg:pb-10 border-b border-[#D9D9D9]">
            <h2>
              Library Stool <br /> Chair
            </h2>
            <span className="mt-4 w-fit rounded-3xl md:text-base text-sm px-3 py-2 text-white bg-[#029FAE]">
              $99.00 USD
            </span>
            <div className="mt-6">
              <button className="text-[20px] bg-[#029FAE] text-white p-3 rounded hover:bg-[#027a87]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div>
        <div className="flex justify-between text-[#272343] text-[30px] font-bold p-4 items-center">
          <h1>FEATURED PRODUCT</h1>
          <p className="text-[20px]">View All</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-y-10 sm:gap-10 md:gap-10 xl:gap-10 justify-center">
          {/* Image 1 */}
          <div className="bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col m-auto hover:shadow-lg transition-shadow">
            <div>
              <Image
                src="/Image (5).png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            <div className="flex justify-between p-3 text-[#272343]">
              <p>Library Stool Chair</p>
              <p className="font-bold">$99</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col m-auto hover:shadow-lg transition-shadow">
            <div>
              <Image
                src="/product-image.png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            <div className="flex justify-between p-3 text-[#272343]">
              <p>Library Stool Chair</p>
              <p className="font-bold">$99</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col m-auto hover:shadow-lg transition-shadow">
            <div>
              <Image
                src="/Image (7).png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            <div className="flex justify-between p-3 text-[#272343]">
              <p>Library Stool Chair</p>
              <p className="font-bold">$99</p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col m-auto hover:shadow-lg transition-shadow">
            <div>
              <Image
                src="/product-3.png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            <div className="flex justify-between p-3 text-[#272343]">
              <p>Library Stool Chair</p>
              <p className="font-bold">$99</p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col m-auto hover:shadow-lg transition-shadow">
            <div>
              <Image
                src="/Image (3).png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            <div className="flex justify-between p-3 text-[#272343]">
              <p>Library Stool Chair</p>
              <p className="font-bold">$99</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
