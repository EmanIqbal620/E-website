import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Futuredproduct() {
  return (
    <>
      <h1 className="text-[#272343] text-[30px] font-bold">
        Featured Products
      </h1>

      <section className=" flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 flex w-full h-full sm:h-[300px] sm:w-full md:w-full md:h-[400px]  lg:h-[400px] bg-[#f9fafb ]  justify-evenly sm:justify-around md:justify-around p-0 sm:p-3 md:p-3 lg:p-3 items-center  ">

        <div className=" flex p-6 px-1 flex-col sm:flex-row md:flex-row ">
            
          <div className=" sm:w-[250px] sm:h-[290px]  bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col sm:flex-row  md:flex-row lg:flex-row m-auto sm:m-0 mx-auto sm:mx-0">
            <div>
              <Image
                src="/product-image.png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            {/* title */}
            <div className="flex justify-between p-1 text-[#272343] ">
              <div>
                <p>Library Stool Chair</p>
                <p className="font-bold">$20</p>
              </div>
              <div className=" p-3 items-center bg-[#F0F2F3] rounded-full">
                <i className="bi bi-cart"></i>
              </div>
            </div>
          </div>
        </div>
        {/*  product2 */}
        <div className="p-6 px-1">
          <div className="w-[250px] h-[290px] bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg flex-col sm:flex-row  md:flex-row lg:flex-row m-auto sm:m-0 mx-auto sm:mx-0">
            <div>
              <Image
                src="/product.png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            {/* title */}
            <div className="flex justify-between p-1 text-[#272343] ">
              <div>
                <p>Library Stool Chair</p>
                <p className="font-bold">$20</p>
              </div>
              <div className="p-3 items-center bg-[#F0F2F3] rounded-full">
                <i className="bi bi-cart"></i>
              </div>
            </div>
          </div>
        </div>
        {/* product 3 */}
        <div className="p-6 px-1">
          <div className="w-[250px] h-[290px] bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg">
            <div>
              <Image
                src="/product-3.png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            {/* title */}
            <div className="flex justify-between p-1 text-[#272343] ">
              <div>
                <p>Library Stool Chair</p>
                <p className="font-bold">$20</p>
              </div>
              <div className="p-3 items-center bg-[#F0F2F3] rounded-full">
                <i className="bi bi-cart"></i>
              </div>
            </div>
          </div>
        </div>
        {/* product 4 */}
        <div className="p-6 px-1">
          <div className="w-[250px] h-[290px] bg-[#ffffff] shadow-[5px_5px_5px_] p-4 items-center justify-center rounded-lg">
            <div>
              <Image
                src="/product-4.png"
                alt="logo"
                width={240}
                height={280}
                className="object-contain"
              />
            </div>
            {/* title */}
            <div className="flex justify-between p-1 tet-[#272343] ">
              <div>
                <p>Library Stool Chair</p>
                <p className="font-bold">$20</p>
              </div>
              <div className="p-3 items-center bg-[#F0F2F3] rounded-full ">
                <i className="bi bi-cart "></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
