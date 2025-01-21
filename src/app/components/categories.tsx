import Image from "next/image";
export default function Categories() {
  return (
    < >
    
      <h1 className="  w-full h-full sm:w-full sm:h-full md:w-full md:h-full flex flex-col sm:flex-row md:flex-row lg:flex-row  text-[#272343] font-bold text-[30px]  ">Top categories</h1>
    

      <section className="  w-full h-full sm:h-[400px] flex flex-col sm:flex-row md:flex-row lg:flex-row   gap-19 sm:gap-11 md:gap-11 lg:gap-11 p-4 sm:p-8 md:p-8 justify-around  items-center mt-auto  ">

        <div className="   flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row w-[300px] h-[300px] bg-[#ffffff] shadow-[5px_5px_5px_]  items-center justify-center rounded-lg ">
        <div className="flex m-auto items-center justify-center" >
       
          <Image
            src="/Image (3).png"
            alt="logo"
            width={260}
            height={300}
            className="object-contain"
          />
        </div>
        
        </div>

        {/* 2 */}
        <div className=" flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  w-[300px] h-[300px] bg-[#ffffff] shadow-[5px_5px_5px_]  items-center justify-center rounded-lg ">
        <div  >
          <Image
            src="/image 1.png"
            alt="logo"
            width={260}
            height={300}
            className="object-contain"
          />
        </div>
        </div>
        {/* 3 */}
        <div className=" flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row w-[300px] h-[300px] bg-[#ffffff] shadow-[5px_5px_5px_]  items-center justify-center rounded-lg ">
        <div  >
          <Image
            src="/Image (7).png"
            alt="logo"
            width={260}
            height={300}
            className="object-contain"
          />
        </div>
        </div>
      </section>
      
      
    </>
  );
}
