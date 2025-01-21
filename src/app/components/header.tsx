import Image from "next/image"

export default function Header() {
    return (
        <>
            <header className="  h-auto sm:h-[650px] md:h-[680px] lg:h-[680px] ;xl:h-[680px] flex-auto sm:flex justify-between bg-[#F0F2F3] ">
                <div className="flex text-[50px] sm:text-[50px] sm:font-bold mt-auto sm:mt-[200px] ml-auto  sm:ml-16 custom-text p-4">
                    <p className=" flex-col sm:flex-row leading-none sm:m-0  p-4 sm:p-0">Best Furniture  <br></br>
                        Collection for your <br></br>
                        interior.</p>
                    <div>

                    </div>


                </div>

                <div className="p-4 flex-col sm:flex-row md:flex-row">
                    <div className="flex mt-auto mr-auto sm:mt-10 sm:mr-11 object-contain  w-full  sm:h-auto sm:flex-col sm:justify-center sm:w-full md:w-full ">
                        <Image src={"/Product Image.png"} alt="" width={434} height={560}
                        ></Image>
                    </div>

                </div>

            </header>

            {/* Company logo */}
            
            <div className="w-full h-full sm:h-[70px] md:h-[100px] lg:h-[130px] flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row bg-[#FFFFFF]">
                <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between sm:gap-4 items-center  px-0 sm:p-3">
                    <Image src="/Logo (1).png" alt="logo" width={87} height={87} />
                    <Image src="/Logo (2).png" alt="logo" width={87} height={87} />
                    <Image src="/Logo (3).png" alt="logo" width={87} height={87} />
                    <Image src="/Logo (4).png" alt="logo" width={87} height={87} />
                    <Image src="/Logo (5).png" alt="logo" width={87} height={87} />
                    <Image src="/Logo (6).png" alt="logo" width={87} height={87} />
                    <Image src="/Logo (7).png" alt="logo" width={87} height={87} />
                </div>

            </div>


        </>
    )
}